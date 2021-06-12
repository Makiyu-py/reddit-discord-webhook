import * as intf from './interfaces';
import fetch from 'node-fetch';
import cron from 'node-cron';
import chalk from 'chalk';
import util from 'util';

class RedditDiscordWebhook {
	subreddit: string;
	webhook_url: string;
	cron: cron.ScheduledTask;

	static postCounter = 0;

	constructor(args: intf.MainClassArgs = {}) {
		this.subreddit = args.subreddit ?? 'hololive';

		const cronSchedule = args.cronSchedule ?? '* * * * *';
		if (!cron.validate(cronSchedule)) {
			throw new Error('Invalid Cron Expression');
		}

		if (args.webhookUrl === undefined || args.webhookUrl === null) {
			require('dotenv').config(); // read env file to get webhook url
			this.webhook_url = `${process.env.WEBHOOK_URL}`;
		} else {
			this.webhook_url = args.webhookUrl!;
		}

		let cronOptions: cron.ScheduleOptions = {
			scheduled: false,
		};

		if (args.cronTZ) {
			cronOptions.timezone = args.cronTZ;
		}

		this.cron = cron.schedule(
			cronSchedule,
			async () => {
				let res = await this.post();
				RedditDiscordWebhook.postCounter++;
				console.log(
					// adding a tab between strings in another level
					// blame this answer: https://stackoverflow.com/a/67327188
					util.format(
						'%s%s',
						chalk.dim(`Post #${RedditDiscordWebhook.postCounter}`) +
							''.padEnd(
								6 + RedditDiscordWebhook.postCounter.toString().length + 5
							),
						`Status: ${
							res.status === 204
								? chalk.green(`${res.status}`)
								: chalk.red(`${res.status}`)
						}`
					)
				);
			},
			cronOptions
		);
	}

	async getRedditPost() {
		const GetRandomPost = async () => {
			const response = await fetch(
				`https://www.reddit.com/r/${this.subreddit}/random.json`
			);
			const json: intf.RedditRes[] = await response.json();

			return json[0].data.children[0].data;
		};

		let post_js: intf.RawPostInfo = await GetRandomPost();

		while (
			post_js.is_self ||
			post_js.url === '' ||
			post_js.domain !== 'i.redd.it'
		) {
			post_js = await GetRandomPost();
		}
		const actualPost: intf.Post = {
			title: post_js.title,
			image_url: post_js.url,
			permalink: `https://www.reddit.com${post_js.permalink}`,
			upvotes: post_js.ups,
			downvotes: post_js.downs,
			subreddit: post_js.subreddit,
		};

		return actualPost;
	}

	async post() {
		const gottenPost = await this.getRedditPost();

		const postToWebhook: intf.BasicWebhookInterface = {
			embeds: [
				{
					title: gottenPost.title,
					image: { url: gottenPost.image_url },
					footer: {
						text: `${gottenPost.upvotes} ⬆️  ${gottenPost.downvotes} ⬇️  |  from r/${gottenPost.subreddit}`,
					},
					url: gottenPost.permalink,
					color: 0xff5700, // reddit orange
				},
			],
		};

		const hook_response = await fetch(this.webhook_url, {
			method: 'POST',
			body: JSON.stringify(postToWebhook),
			headers: { 'Content-Type': 'application/json' },
		});
		return hook_response;
	}
	start() {
		this.cron.start();
	}
	stop() {
		this.cron.stop();
	}
}

const rtw = new RedditDiscordWebhook();
rtw.start();

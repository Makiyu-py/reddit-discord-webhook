import * as intf from './interfaces';
import fetch from 'node-fetch';
import cron from 'node-cron';
import chalk from 'chalk';
import util from 'util';

require('dotenv').config(); // read env file to get webhook url

const GetPostHandler = async (subreddit: String = 'Hololive') => {
	const GetRandomPost = async () => {
		const response = await fetch(
			`https://www.reddit.com/r/${subreddit}/random.json`
		);
		const json: [intf.RedditRes] = await response.json();

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
};

const postToDiscord = async (hook_url: String) => {
	const post = await GetPostHandler(process.env.SUBREDDIT);

	const toPost: intf.BasicWebhookInterface = {
		embeds: [
			{
				title: post.title,
				image: { url: post.image_url },
				footer: {
					text: `${post.upvotes} ⬆️  ${post.downvotes} ⬇️  |  from r/${post.subreddit}`,
				},
				url: post.permalink,
				color: 0xff5700, // reddit orange
			},
		],
	};

	const hook_response = await fetch(`${hook_url}`, {
		method: 'POST',
		body: JSON.stringify(toPost),
		headers: { 'Content-Type': 'application/json' },
	});
	return hook_response;
};

let postCounter = 0;

// change cron schedule if you want a different interval (currently a post per minute)
cron.schedule('* * * * *', async () => {
	await postToDiscord(`${process.env.WEBHOOK_URL}`).then((res) => {
		postCounter++;
		console.log(
			// adding a tab between strings in another level
			// blame this answer: https://stackoverflow.com/a/67327188
			util.format(
				'%s%s',
				chalk.dim(`Post #${postCounter}`) +
					''.padEnd(6 + postCounter.toString().length + 5),
				`Status: ${
					res.status === 204
						? chalk.green(`${res.status}`)
						: chalk.red(`${res.status}`)
				}`
			)
		);
	});
});

# reddit-discord-webhook

Send Reddit image posts on a certain interval as a Discord webhook!

## Set-up

### But Before that...

Never forget to clone this project and install needed dependencies!

And also...

#### Customization

You can customize the cron schedule and subreddit by adding arguments to the `RedditDiscordWebhook` class, for example:

```ts
const rtw = new RedditDiscordWebhook({
	webhookUrl: 'https://discord.com/api/webhooks/:webhook_id/:webhook_token', // your webhook url, defaults to the WEBHOOK_URL env
	cronSchedule: '* * * * *', // changes cron schedule
	subreddit: 'hololive', // changes subreddit you want to get from
	cronTZ: 'Asia/Tokyo', // add a specific timezone (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/tz-offset/index.d.ts#L6) to use for your cron schedule
});
rtw.start(); // starts the cron
```

### Environments

Replace the `example.env` file name to `.env` then replace all variable values to your own.

### Running

#### Production

Compiling and Running is as easy as two commands!

```
npm run build
```

and

```
npm run start
```

#### Development

If you want it to run and rerun per edit:

The command

```
npm run build:watch
```

will compile your TypeScript code per edit while

```
npm run start:dev
```

will rerun the compiled code on every compilation (using nodemon)!

## Example Output

![](https://cdn.discordapp.com/attachments/760715805905387550/851697566517428224/Screen_Shot_2021-06-08_at_1.38.24_PM.png)

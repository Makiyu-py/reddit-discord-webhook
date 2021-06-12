/*
	For Better
	Autocompletion™
*/

import { Timezone } from 'tz-offset';

export interface RedditData {
	modhash: string;
	dist: number;
	children: Array<any>;
	before: null;
	after: null;
}

export interface RawPostInfo {
	approved_at_utc: object;
	subreddit: string;
	selftext: string;
	user_reports: Object;
	saved: boolean;
	mod_reason_title: Object;
	gilded: number;
	clicked: boolean;
	title: string;
	link_flair_richtext: Object;
	subreddit_name_prefixed: string;
	hidden: boolean;
	pwls: number;
	link_flair_css_class: Object;
	downs: number;
	thumbnail_height: number;
	top_awarded_type: Object;
	parent_whitelist_status: string;
	hide_score: boolean;
	name: string;
	quarantine: boolean;
	link_flair_text_color: string;
	upvote_ratio: number;
	author_flair_background_color: string;
	subreddit_type: string;
	ups: number;
	total_awards_received: number;
	media_embed: Object;
	thumbnail_width: number;
	author_flair_template_id: string;
	is_original_content: boolean;
	author_fullname: string;
	secure_media: Object;
	is_reddit_media_domain: boolean;
	is_meta: boolean;
	category: Object;
	secure_media_embed: Object;
	link_flair_text: Object;
	can_mod_post: boolean;
	score: number;
	approved_by: Object;
	is_created_from_ads_ui: boolean;
	author_premium: boolean;
	thumbnail: string;
	edited: boolean;
	author_flair_css_class: string;
	author_flair_richtext: Object;
	gildings: Object;
	post_hint: string;
	content_categories: Object;
	is_self: boolean;
	mod_note: Object;
	created: number;
	link_flair_type: string;
	wls: number;
	removed_by_category: Object;
	banned_by: Object;
	author_flair_type: string;
	domain: string;
	allow_live_comments: boolean;
	selftext_html: Object;
	likes: Object;
	suggested_sort: Object;
	banned_at_utc: Object;
	url_overridden_by_dest: string;
	view_count: Object;
	archived: boolean;
	no_follow: boolean;
	is_crosspostable: boolean;
	pinned: boolean;
	over_18: boolean;
	preview: Object;
	all_awardings: Object;
	awarders: Object;
	media_only: boolean;
	can_gild: boolean;
	spoiler: boolean;
	locked: boolean;
	author_flair_text: string;
	treatment_tags: Object;
	visited: boolean;
	removed_by: Object;
	num_reports: Object;
	distinguished: Object;
	subreddit_id: string;
	mod_reason_by: Object;
	removal_reason: Object;
	link_flair_background_color: string;
	id: string;
	is_robot_indexable: boolean;
	num_duplicates: number;
	report_reasons: Object;
	author: string;
	discussion_type: Object;
	num_comments: number;
	send_replies: boolean;
	media: Object;
	contest_mode: boolean;
	author_patreon_flair: boolean;
	author_flair_text_color: string;
	permalink: string;
	whitelist_status: string;
	stickied: boolean;
	url: string;
	subreddit_subscribers: number;
	created_utc: number;
	num_crossposts: number;
	mod_reports: Object;
	is_video: boolean;
}

export interface Post {
	title: string;
	image_url: string;
	permalink: string;
	upvotes: number;
	downvotes: number;
	subreddit: string;
}

interface IcoUrls {
	icon_url?: string;
	proxy_icon_url?: string;
}

interface EmbedField {
	name: string;
	value: string;
	inline?: boolean;
}

interface EmbedProvider {
	name: string;
	url: string;
}

interface EmbedFooter extends IcoUrls {
	text: string;
}

interface EmbedIMG {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

interface EmbedAuthor extends EmbedProvider, IcoUrls {}

export interface EmbedStructure {
	title?: string;
	type?: string;
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: EmbedFooter;
	image?: EmbedIMG;
	thumbnail?: EmbedIMG;
	video?: EmbedIMG;
	provider?: EmbedProvider;
	author?: EmbedAuthor;
	fields?: Array<EmbedField>;
}

export interface BasicWebhookInterface {
	content?: string;
	username?: string;
	avatar_url?: string;
	tts?: boolean;
	embeds?: Array<EmbedStructure>;
	payload_json?: string;
}

export interface RedditRes {
	kind: string;
	data: RedditData;
}

export interface MainClassArgs {
	cronSchedule?: string;
	cronTZ?: Timezone;
	webhookUrl?: string;
	subreddit?: string;
}

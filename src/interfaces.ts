/*
	For Better
	Autocompletion™
*/

export interface RedditData {
	modhash: String;
	dist: Number;
	children: Array<any>;
	before: null;
	after: null;
}

export interface RawPostInfo {
	approved_at_utc: Object;
	subreddit: String;
	selftext: String;
	user_reports: Object;
	saved: Boolean;
	mod_reason_title: Object;
	gilded: Number;
	clicked: Boolean;
	title: String;
	link_flair_richtext: Object;
	subreddit_name_prefixed: String;
	hidden: Boolean;
	pwls: Number;
	link_flair_css_class: Object;
	downs: Number;
	thumbnail_height: Number;
	top_awarded_type: Object;
	parent_whitelist_status: String;
	hide_score: Boolean;
	name: String;
	quarantine: Boolean;
	link_flair_text_color: String;
	upvote_ratio: Number;
	author_flair_background_color: String;
	subreddit_type: String;
	ups: Number;
	total_awards_received: Number;
	media_embed: Object;
	thumbnail_width: Number;
	author_flair_template_id: String;
	is_original_content: Boolean;
	author_fullname: String;
	secure_media: Object;
	is_reddit_media_domain: Boolean;
	is_meta: Boolean;
	category: Object;
	secure_media_embed: Object;
	link_flair_text: Object;
	can_mod_post: Boolean;
	score: Number;
	approved_by: Object;
	is_created_from_ads_ui: Boolean;
	author_premium: Boolean;
	thumbnail: String;
	edited: Boolean;
	author_flair_css_class: String;
	author_flair_richtext: Object;
	gildings: Object;
	post_hint: String;
	content_categories: Object;
	is_self: Boolean;
	mod_note: Object;
	created: Number;
	link_flair_type: String;
	wls: Number;
	removed_by_category: Object;
	banned_by: Object;
	author_flair_type: String;
	domain: String;
	allow_live_comments: Boolean;
	selftext_html: Object;
	likes: Object;
	suggested_sort: Object;
	banned_at_utc: Object;
	url_overridden_by_dest: String;
	view_count: Object;
	archived: Boolean;
	no_follow: Boolean;
	is_crosspostable: Boolean;
	pinned: Boolean;
	over_18: Boolean;
	preview: Object;
	all_awardings: Object;
	awarders: Object;
	media_only: Boolean;
	can_gild: Boolean;
	spoiler: Boolean;
	locked: Boolean;
	author_flair_text: String;
	treatment_tags: Object;
	visited: Boolean;
	removed_by: Object;
	num_reports: Object;
	distinguished: Object;
	subreddit_id: String;
	mod_reason_by: Object;
	removal_reason: Object;
	link_flair_background_color: String;
	id: String;
	is_robot_indexable: Boolean;
	num_duplicates: Number;
	report_reasons: Object;
	author: String;
	discussion_type: Object;
	num_comments: Number;
	send_replies: Boolean;
	media: Object;
	contest_mode: Boolean;
	author_patreon_flair: Boolean;
	author_flair_text_color: String;
	permalink: String;
	whitelist_status: String;
	stickied: Boolean;
	url: String;
	subreddit_subscribers: Number;
	created_utc: Number;
	num_crossposts: Number;
	mod_reports: Object;
	is_video: Boolean;
}

export interface Post {
	title: String;
	image_url: String;
	permalink: String;
	upvotes: Number;
	downvotes: Number;
	subreddit: String;
}

interface IcoUrls {
	icon_url?: String;
	proxy_icon_url?: String;
}

interface EmbedField {
	name: String;
	value: String;
	inline?: Boolean;
}

interface EmbedProvider {
	name: String;
	url: String;
}

interface EmbedFooter extends IcoUrls {
	text: String;
}

interface EmbedIMG {
	url?: String;
	proxy_url?: String;
	height?: Number;
	width?: Number;
}

interface EmbedAuthor extends EmbedProvider, IcoUrls {}

export interface EmbedStructure {
	title?: String;
	type?: String;
	description?: String;
	url?: String;
	timestamp?: String;
	color?: Number;
	footer?: EmbedFooter;
	image?: EmbedIMG;
	thumbnail?: EmbedIMG;
	video?: EmbedIMG;
	provider?: EmbedProvider;
	author?: EmbedAuthor;
	fields?: Array<EmbedField>;
}

export interface BasicWebhookInterface {
	content?: String;
	username?: String;
	avatar_url?: String;
	tts?: Boolean;
	embeds?: Array<EmbedStructure>;
	payload_json?: String;
}

export interface RedditRes {
	kind: String;
	data: RedditData;
}

export const SITE = {
	name: 'stlk.me',

	origin: 'https://stlk.me',
	basePathname: '/',

	title: 'stlk.me | photography',
	description: 'a non-profit to inspire, educate and mentor youth through photography',

	// googleAnalyticsId: "G-GJ39ZEDESJ", // or false,
	// googleSiteVerificationId: 'cqsr47x74v4mgs623n4mbnmbkt5i2slyy2gbjpb7bgogg5ugsssa',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};

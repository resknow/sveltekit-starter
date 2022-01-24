export default {
	/**
	 * Site name, useful for page titles
	 */
	name: `SvelteKit Starter`,

	/**
	 * Company Information
	 */
	email: `info@resknow.co.uk`,
	phone: '0208 300 8833',
	address: '13 St Johns Parade, Sidcup, Kent, DA14 6ES',
	location: {
		lat: `51.42492021179657`,
		lng: `0.10547518730163574`
	},

	/**
	 * Site URL, we use this in the Sitemap
	 */
	url: `http://localhost:3000`,

	/**
	 * Menus
	 */
	menus: {
		main: [{ label: 'Home', href: '/' }]
	},

	/**
	 * Global stylesheets, added in the <head> of each page
	 *
	 * For page specific stylesheets, use the same keys in
	 * frontmatter.
	 */
	stylesheets: [`/style.css`],

	/**
	 * Global Javascript, added in the <head> of each page
	 * with a defer attribute
	 *
	 * For page specific javascript, use the same keys in
	 * frontmatter.
	 */
	scripts: [`/bundle.js`],

	/**
	 * Cookie Consent
	 *
	 * A small banner will appear in the bottom left of the
	 * page letting the user know this site uses cookies
	 * to provide the best experience.
	 *
	 * You can customise the text shown by setting a text property
	 */
	cookieConsent: {
		show: true
	},

	/**
	 * CSS Options
	 *
	 * Both options are set to true automatically during production
	 * build, manually set them here if you want to test them locally.
	 */
	css: {
		// purge: true,
		// minify: true
	},

	wordpress: {
		baseUri: `http://cms.resknow.net/mandys-movers/wp-json/wp/v2`
	}
};

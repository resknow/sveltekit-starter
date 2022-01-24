import site from '../site';

export function get() {
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	const entries = [];

	site.menus.main.forEach((page) => {
		if (page?.sitemap !== false) {
			entries.push(`<url>
                <loc>${site.url}${page.href}</loc>
                <changefreq>${page?.changeFreq || 'daily'}</changefreq>
                <priority>${page?.priority || '0.7'}</priority>
            </url>`);
		}
	});

	return {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >${entries.join('')}</urlset>`
	};
}

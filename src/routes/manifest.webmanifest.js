import site from '../site';

export function get() {
	const headers = {
		'Content-type': 'application/json'
	};

	return {
		headers,
		body: JSON.stringify({
			name: site.name,
			icons: [
				{ src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
				{ src: '/icon-512.png', type: 'image/png', sizes: '512x512' }
			]
		})
	};
}

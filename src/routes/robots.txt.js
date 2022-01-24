export function get() {
	const headers = {
		'Content-type': 'text/plain'
	};

	return {
		headers,
		body: `User-agent: *
Allow: *`
	};
}

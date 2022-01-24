<script context="module">
	import site from '../site';

	export async function load({ fetch }) {
		const url = `${site.wordpress.baseUri}/testimonials`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					testimonials: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Layout from './__layout.svelte';
	export let testimonials;
</script>

<Layout>
	<h1>Testimonials</h1>
	{#each testimonials as testimonial}
		{@html testimonial.content.rendered}
	{/each}
</Layout>

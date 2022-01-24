<script>
	import Tabs from '@components/tabs.svelte';

	let tabItems = [
		{ title: 'Wow', content: 'This was easy' },
		{ title: 'Nice', content: 'So easy!' }
	];
</script>

<div class="flow">
	<h1>Tabs</h1>
	<p>Take a look at <code>src/routes/tabs.svelte</code> to see how it works.</p>
	<Tabs items={tabItems} />
</div>

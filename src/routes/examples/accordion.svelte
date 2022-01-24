<script>
	import Accordion from '@components/accordion.svelte';

	let accordionItems = [
		{ title: 'Wow', content: 'This was easy' },
		{ title: 'Nice', content: 'So easy!' }
	];
</script>

<div class="flow">
	<h1>Accordion</h1>
	<p>Take a look at <code>src/routes/accordion.svelte</code> to see how it works.</p>
	<Accordion items={accordionItems} />
</div>

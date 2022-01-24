<script>
	import Button from '@components/button.svelte';
</script>

<div class="flow">
	<h1>Buttons</h1>
	<p>Take a look at <code>src/routes/button.svelte</code> to see how it works.</p>

	<div class="flow flow-space-8 mt-12">
		<article class="flow flow-space-1">
			<h2 class="c-gray-50 size-sm tracking-wide uppercase">Button</h2>
			<Button>Just a button</Button>
			<p class="c-gray-70 mt-3">
				A button. If your button is controlling interactivity on the current page, use one of these.
			</p>
		</article>
		<article class="flow flow-space-1">
			<h2 class="c-gray-50 size-sm tracking-wide uppercase">Link Button</h2>
			<Button tag="a" href="/contact">Link button</Button>
			<p class="c-gray-70 mt-3">
				A button, but really it's a link. If your button should take you to another page, use one of
				these.
			</p>
		</article>
	</div>
</div>

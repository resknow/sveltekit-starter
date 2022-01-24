<script>
	export let id = 'tab';
	export let items = [];

	$: activeItem = `${id}-0`;
</script>

<div class="tabs">
	<nav class="tabs__nav">
		<ul class="cluster">
			{#each items as item, key}
				<li {key}>
					<a
						on:click={(event) => {
							event.preventDefault();
							activeItem = `${id}-${key}`;
						}}
						href={`#${id}-${key}`}
					>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	{#each items as item, key}
		<div
			id={`${id}-${key}`}
			class="tab"
			aria-current={activeItem === `${id}-${key}`}
			hidden={activeItem !== `${id}-${key}`}
		>
			{@html item.content}
		</div>
	{/each}
</div>

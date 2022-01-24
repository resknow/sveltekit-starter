<script>
	export let id = 'accordion';
	export let items = [];

	$: activeItem = `${id}-0`;
</script>

<div class="accordion">
	{#each items as item, key}
		<h3
			class="accordion__heading size-base"
			{key}
			data-state={`${id}-${key}` ? 'active' : 'inactive'}
		>
			<button
				id={`accordion-button-${id}-${key}`}
				aria-controls={`accordion-panel-${id}-${key}`}
				aria-expanded={activeItem === `${id}-${key}`}
				on:click={() => {
					if (activeItem !== `${id}-${key}`) activeItem = `${id}-${key}`;
				}}
			>
				{item.title}
			</button>
		</h3>
		<div
			class="accordion__panel"
			hidden={activeItem !== `${id}-${key}`}
			id={`accordion-panel-${id}-${key}`}
			aria-labelledby={`accordion-button-${id}-${key}`}
		>
			{@html item.content}
		</div>
	{/each}
</div>

<style>
	.accordion {
		--accordion-border: 1px solid var(--color-gray-10);
		--accordion-padding-x: var(--space-4);
		--accordion-padding-y: var(--space-2);
	}

	.accordion__heading-icon {
		fill: var(--color-gray-50);
		position: absolute;
		right: var(--accordion-padding-x);
		transition: transform 200ms ease-in-out;
	}

	.accordion__heading[data-state='active'] .accordion__heading-icon {
		transform: rotate(-180deg);
	}

	.accordion__panel {
		border: var(--accordion-border);
		margin-top: -1px;
		padding: var(--accordion-padding-y) var(--accordion-padding-x);
	}

	.accordion__panel + .accordion__heading {
		margin-top: var(--space-1);
	}
</style>

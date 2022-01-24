<script>
	export let href;
	export let size = 'md';
	export let tag = 'button'; // 'button' or 'a'
	export let type = 'submit';

	let sizes = { sm: 'btn--sm', md: 'btn--md', lg: 'btn--lg' };
</script>

{#if tag === 'button'}
	<button class={`btn ${sizes[size]}`} {type}>
		<slot />
	</button>
{:else}
	<a class={`btn ${sizes[size]}`} {href}>
		<slot />
	</a>
{/if}

<style lang="scss">
	.btn,
	input[type='file']::file-selector-button {
		--btn-background-color: var(--color-gray-90);
		--btn-color: var(--color-white);
		--btn-font-weight: var(--weight-bold);
		--btn-padding: var(--space-3) var(--space-6);

		align-items: center;
		appearance: none;
		background-color: var(--btn-background-color);
		border-radius: var(--btn-radius, var(--radius-base));
		border: var(--btn-border, 0);
		box-shadow: var(--btn-shadow, none);
		color: var(--btn-color);
		display: inline-flex;
		font-size: var(--btn-font-size, inherit);
		font-weight: var(--btn-font-weight, var(--weight-normal));
		justify-content: center;
		min-width: var(--btn-min-width, 5rem);
		padding: var(--btn-padding);
		text-align: center;
		text-decoration: none;
		transition: var(--btn-transition, all 400ms ease-in-out);
		gap: var(--btn-gap, var(--space-2));
	}

	.btn:hover,
	.btn:focus {
		--btn-background-color: var(--color-white);
		--btn-color: var(--color-primary);
		--btn-shadow: var(--shadow-xl);
		--btn-transition: all 150ms ease-in-out;
	}

	.btn--sm {
		--btn-padding: var(--space-2) var(--space-4);
	}

	.btn--lg {
		--btn-padding: var(--space-3) var(--space-8);
		--btn-font-size: var(--size-lg);
		letter-spacing: var(--tracking-tight);
	}

	.btn--full-width {
		display: flex;
		width: 100%;
	}

	input[type='file']::file-selector-button {
		margin-inline-end: var(--space-4, 1em);
	}

	@each $key, $value in token('color') {
		.btn--#{$key} {
			--btn-background-color: #{$value};
			--btn-color: #{auto-color($value)};
		}
	}
</style>

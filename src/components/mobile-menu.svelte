<script>
	export let items = [];
	export let phoneNumber;

	$: isOpen = false;
</script>

<div>
	<nav class="mobile-menu" data-state={isOpen ? 'open' : 'closed'}>
		<ul>
			{#each items as link}
				{#if link.children}
					<li>
						<a href={link.href}>{link.label}</a>

						{#if link.children}
							<ul class="mobile-menu__dropdown | ml-4">
								{#each link.children as child}
									<li>
										<a href={child.href}>{child.label}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{:else}
					<li>
						<a href={link.href}>{link.label}</a>
					</li>
				{/if}
			{/each}
		</ul>

		{#if phoneNumber}
			<div class="mobile-menu__phone">
				<p class="uppercase c-gray-70 tracking-wide size-sm">Call Us</p>
				<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
			</div>
		{/if}
	</nav>
</div>

<button
	on:click={() => (isOpen = !isOpen)}
	data-state={isOpen ? 'open' : 'closed'}
	class="hamburger"
>
	<span class="bar" />
	<span class="bar" />
	<span class="bar" />
</button>

<style lang="scss">
	$hideMobileMenuAt: 900px !default;

	.hamburger {
		--bar-color: var(--color-black, black);

		position: relative;
		z-index: 9;

		@media (min-width: $hideMobileMenuAt) {
			display: none;
		}
	}

	.hamburger .bar {
		width: 35px;
		height: 3px;
		background-color: var(--bar-color);
		margin: 6px 0;
		transition: 0.4s;
		display: block;
	}

	.hamburger[data-state='open'] .bar:nth-child(1) {
		transform: rotate(-45deg) translate(-4px, 6px);
	}

	.hamburger[data-state='open'] .bar:nth-child(2) {
		opacity: 0;
	}

	.hamburger[data-state='open'] .bar:nth-child(3) {
		transform: rotate(45deg) translate(-8px, -8px);
	}

	.mobile-menu {
		background-color: var(--color-white, white);
		box-shadow: var(--shadow-2xl);
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: var(--space-64, 320px);
		z-index: 10;
		padding-top: var(--space-10, 40px);
		padding-bottom: var(--space-10, 40px);
		transform: translateX(-100vw);
		transition: transform 500ms ease-in-out;
		will-change: transform;

		ul {
			font-size: var(--size-lg, 1.2em);
		}

		a {
			color: var(--link-color, var(--color-gray-70));
			font-weight: var(--weight-bold, 700);
			display: block;
			padding: var(--space-4, 16px) var(--space-8, 32px);
			text-decoration: none;
		}

		.mobile-menu__dropdown a {
			font-weight: var(--weight-normal, 400);
		}

		.mobile-menu__phone {
			margin-top: auto;
			padding: var(--space-4, 16px) var(--space-8, 32px);

			a {
				color: var(--color-black, black);
				font-size: var(--size-xl, 1.4em);
				font-weight: var(--weight-bold, 700);
				letter-spacing: var(--tracking-tight, -0.5px);
				padding: 0;
			}
		}

		&[data-state='open'] {
			transform: translateX(0);
			transition: transform 250ms ease-in-out;
		}

		@media (min-width: $hideMobileMenuAt) {
			display: none;
		}
	}
</style>

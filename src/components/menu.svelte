<script>
	export let items = [];
</script>

<nav class="menu">
	<ul class="flex gap-6">
		{#each items as link}
			<li class="menu__item">
				<a href={link.href} class="menu__link | flex items-center">
					<span>{link.label}</span>
					<!-- {% icon "caret-down", "ml-2 size-sm" %} -->
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	$showMenuAt: 900px !default;

	.menu {
		display: none;

		.menu__item {
			position: relative;
		}

		a {
			color: var(--menu-link-color, var(--color-gray-70));
			text-decoration: none;

			&:hover {
				--menu-link-color: var(--menu-link-color-hover, var(--color-gray-90));
			}
		}

		.menu__dropdown {
			background-color: var(--menu-dropdown-background-color, white);
			box-shadow: var(--menu-dropdown-shadow, var(--shadow-xl));
			padding: var(--menu-dropdown-padding, var(--space-4) var(--space-6));
			position: absolute;
			left: calc(var(--menu-dropdown-h-offset, var(--space-2)) * -1);
			top: var(--menu-dropdown-v-offset, var(--space-8));
			min-width: var(--menu-dropdown-min-width, 10rem);
		}

		@media (min-width: $showMenuAt) {
			display: block;
		}
	}
</style>

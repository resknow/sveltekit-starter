<script>
	import Menu from '@components/menu.svelte';
	import MobileMenu from '@components/mobile-menu.svelte';
	import site from '../site';
</script>

<header class="px-8 py-4">
	<div class="container flex justify-between items-center">
		<a class="size-lg weight-bold" href="/">{site.name}</a>
		<MobileMenu items={site.menus.main} phoneNumber={site.phone} />
		<Menu items={site.menus.main} />
	</div>
</header>

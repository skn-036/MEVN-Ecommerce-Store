<script setup lang="ts">
	import Logo from '@/components/navbar/menu-bar/Logo.vue';
	import Menu from '@/components/navbar/menu-bar/Menu.vue';
	import Search from '@/components/navbar/menu-bar/Search.vue';
</script>

<template>
	<div
		class="container-padding bg-white border-b border-gray-100 w-full h-20 flex"
	>
		<div class="h-10 flex flex-row items-center my-auto w-full">
			<!-- Logo -->
			<Logo class="mr-20" />
			<!-- Menu -->
			<Menu class="flex-1" />
			<!-- Search -->
			<Search class="ml-auto w-max" />
		</div>
	</div>
</template>

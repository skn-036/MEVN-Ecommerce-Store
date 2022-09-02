<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';

	const route = computed<RouteLocationNormalizedLoaded>(() => useRoute());

	const isMatchedRoute = (name: string): boolean => {
		if (!route.value || !route.value.matched || !route.value.matched.length)
			return false;
		return route.value.matched.some(match => match.name === name);
	};
</script>

<template>
	<div class="flex flex-row text-[16px] text-[#0D0E43] h-5 font-lato">
		<RouterLink
			:to="{ name: 'home' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent"
			:class="{ 'text-accent': isMatchedRoute('home') }"
		>
			Home
		</RouterLink>
		<RouterLink
			:to="{ name: 'shop' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent"
			:class="{ 'text-accent': isMatchedRoute('shop') }"
		>
			Shop
		</RouterLink>
		<RouterLink
			:to="{ name: 'blog' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent"
			:class="{ 'text-accent': isMatchedRoute('blog') }"
		>
			Blog
		</RouterLink>
		<RouterLink
			:to="{ name: 'contact' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent"
			:class="{ 'text-accent': isMatchedRoute('contact') }"
		>
			Contact
		</RouterLink>
		<RouterLink
			:to="{ name: 'about' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent"
			:class="{ 'text-accent': isMatchedRoute('about') }"
		>
			About us
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
	import useAppConfig from '@/composables/app/useAppConfig';

	const route = computed<RouteLocationNormalizedLoaded>(() => useRoute());

	const { showMobileMenu, toggleMobileMenu } = useAppConfig();

	const isMatchedRoute = (name: string): boolean => {
		if (!route.value || !route.value.matched || !route.value.matched.length)
			return false;
		return route.value.matched.some(match => match.name === name);
	};
</script>

<template>
	<div
		class="flex flex-col lg:flex-row text-[16px] text-[#0D0E43] h-5 font-lato"
	>
		<RouterLink
			:to="{ name: 'home' }"
			class="cursor-pointer my-auto font-semibold hover:text-accent mb-4 lg:mb-0 lg:mr-6"
			:class="[isMatchedRoute('home') ? 'text-accent' : '']"
			@click="showMobileMenu && toggleMobileMenu()"
		>
			Home
		</RouterLink>
		<RouterLink
			:to="{ name: 'shop' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent mb-4 lg:mb-0 lg:mr-6"
			:class="[isMatchedRoute('shop') ? 'text-accent' : '']"
			@click="showMobileMenu && toggleMobileMenu()"
		>
			Shop
		</RouterLink>
		<RouterLink
			:to="{ name: 'blog' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent mb-4 lg:mb-0 lg:mr-6"
			:class="[isMatchedRoute('blog') ? 'text-accent' : '']"
			@click="showMobileMenu && toggleMobileMenu()"
		>
			Blog
		</RouterLink>
		<RouterLink
			:to="{ name: 'contact' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent mb-4 lg:mb-0 lg:mr-6"
			:class="[isMatchedRoute('contact') ? 'text-accent' : '']"
			@click="showMobileMenu && toggleMobileMenu()"
		>
			Contact
		</RouterLink>
		<RouterLink
			:to="{ name: 'about' }"
			class="mr-6 cursor-pointer my-auto font-semibold hover:text-accent mb-4 lg:mb-0 lg:mr-6"
			:class="[isMatchedRoute('about') ? 'text-accent' : '']"
			@click="showMobileMenu && toggleMobileMenu()"
		>
			About us
		</RouterLink>
	</div>
</template>

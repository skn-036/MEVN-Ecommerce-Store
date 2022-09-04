<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import LayoutTopHeader from '@/layouts/LayoutTopHeader.vue';
	import LayoutFull from '@/layouts/LayoutFull.vue';
	import useAuth from '@/composables/auth/useAuth';

	const { isUserLoggedInAuthRequiredRoutes } = useAuth();

	const route = useRoute();
	const screen = computed(() => route.meta?.screen);
</script>

<template>
	<div v-if="isUserLoggedInAuthRequiredRoutes()" class="w-full h-full">
		<!-- top header layout -->
		<LayoutTopHeader v-if="screen === 'top-header'" />

		<!-- full layout -->
		<LayoutFull v-else-if="screen === 'full'" />
	</div>
</template>

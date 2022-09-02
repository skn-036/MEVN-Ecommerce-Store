<script setup lang="ts">
	import { computed } from 'vue';
	import { useRoute } from 'vue-router';
	import LayoutTopHeader from '@/layouts/LayoutTopHeader.vue';
	import LayoutFull from '@/layouts/LayoutFull.vue';

	const route = useRoute();
	const screen = computed(() => route.meta?.screen);
</script>

<template>
	<div class="w-full h-full">
		<!-- top header layout -->
		<LayoutTopHeader v-if="!screen || screen === 'top-header'" />

		<!-- full layout -->
		<LayoutFull v-else-if="screen === 'full'" />

		<!-- default layout -->
		<LayoutTopHeader v-else />
	</div>
</template>

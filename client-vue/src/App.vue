<script setup lang="ts">
	import useAppConfig from '@/composables/app/useAppConfig';
	import LayoutRenderer from '@/layouts/LayoutRenderer.vue';

	const { setCurrentWindowWidth } = useAppConfig();
	window.addEventListener('resize', () => {
		setCurrentWindowWidth();
	});
	console.log(process.env, import.meta.env);
	// console.log(import.meta.env, import.meta.env.VITE_TEST, import.meta.env.TEST);
</script>

<template>
	<LayoutRenderer />
</template>

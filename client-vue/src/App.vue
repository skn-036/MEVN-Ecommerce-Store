<script setup lang="ts">
	import useAppConfig from '@/composables/app/useAppConfig';
	import LayoutRenderer from '@/layouts/LayoutRenderer.vue';

	const { setCurrentWindowWidth } = useAppConfig();
	window.addEventListener('resize', () => {
		setCurrentWindowWidth();
	});
</script>

<template>
	<LayoutRenderer />
</template>

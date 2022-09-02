<script setup lang="ts">
	import { computed } from 'vue';
	import { Slide } from '@/types/home/Slider';
	import useFile from '@/composables/app/useFile';
	import { useRoute, RouteLocationRaw } from 'vue-router';

	interface Props {
		slide: Slide;
	}

	const props = defineProps<Props>();

	const { resolvePathUrl } = useFile();

	const linkButtonStyles = computed(() => {
		if (props.slide.button) {
			const { background, color, hoverBackground } = props.slide.buttonProps;
			return {
				'--background': background ? background : '#fb2e86',
				'--hover-bg': hoverBackground ? hoverBackground : '#e71c74',
				'--color': color ? color : '#ffffff',
			};
		} else {
			return {
				'--background': '#fb2e86',
				'--hover-bg': '#e71c74',
				'--color': '#ffffff',
			};
		}
	});

	const buttonLink = computed(() => {
		const { name, params, query } = props.slide.route;
		return {
			name,
			params: params ? params : {},
			query: query ? query : {},
		};
	});
</script>

<template>
	<div class="w-full h-full relative">
		<img class="w-full h-auto" :src="resolvePathUrl(props.slide.imagePath)" />
		<button
			v-if="props.slide.button"
			class="absolute z-10 px-4 lg:px-8 py-2 rounded-sm container-left bottom-[10%] link-button"
			:style="linkButtonStyles"
			@click="$router.push(buttonLink)"
		>
			{{ props.slide.buttonProps.title }}
		</button>
	</div>
</template>

<style scoped>
	.link-button {
		background: var(--background);
		color: var(--color);
	}
	.link-button:hover {
		background: var(--hover-bg);
	}
</style>

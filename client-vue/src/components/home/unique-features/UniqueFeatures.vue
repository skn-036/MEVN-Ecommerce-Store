<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="w-full bg-[#f1f0ff] container-padding">
		<img
			class="w-full h-auto object-contain"
			:src="
				resolvePathUrl('images/home/unique-features/unique-feature-sofa.png')
			"
		/>
	</div>
</template>

<style scoped></style>

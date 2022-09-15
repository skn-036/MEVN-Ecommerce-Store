<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div
		class="w-full h-[420px] object-contain object-left-top centered"
		:style="{
			background: `url('${resolvePathUrl(
				'images/home/newsletter/newsletter.png'
			)}')`,
			backgroundSize: '100% 420px',
		}"
	>
		<div class="w-11/12 md:w-9/12 lg:w-1/2 centered flex-col">
			<div class="text-navy font-bold text-center text-[35px]">
				Get Latest Update By Subscribe our Newsletter
			</div>
			<button class="button-accent mt-5">Subscribe now</button>
		</div>
	</div>
</template>

<style scoped>
	/* .newsletter-container {
		ba
	} */
</style>

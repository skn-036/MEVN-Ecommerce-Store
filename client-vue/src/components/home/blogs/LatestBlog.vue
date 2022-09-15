<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	import BlogPreviewCard from '@/components/blogs/BlogPreviewCard.vue';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="container-padding flex flex-col">
		<!-- heading -->
		<h2
			class="text-2xl md:text-[42px] text-navy font-bold mx-auto w-max h-max mb-8"
		>
			Latest Blogs
		</h2>

		<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
			<BlogPreviewCard />
			<BlogPreviewCard />
			<BlogPreviewCard />
		</div>
	</div>
</template>

<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="w-full container-padding">
		<!-- title -->
		<h2
			class="text-2xl md:text-[42px] text-navy font-bold mx-auto w-max h-max mb-10"
		>
			Top Categories
		</h2>

		<!-- categories -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
		>
			<div
				class="flex flex-col items-center justify-center rounded-full col-span-1 cursor-pointer"
			>
				<img
					class="w-60 h-60 rounded-full bg-[#EEEFFB] category-img p-2"
					:src="resolvePathUrl('images/shop/product/5.png')"
				/>
				<div class="mt-4 text-lg font-bold text-navy mx-auto">Chair</div>
			</div>

			<div
				class="flex flex-col items-center justify-center rounded-full col-span-1 cursor-pointer"
			>
				<img
					class="w-60 h-60 rounded-full bg-[#EEEFFB] category-img p-2"
					:src="resolvePathUrl('images/shop/product/11.png')"
				/>
				<div class="mt-4 text-lg font-bold text-navy mx-auto">Table</div>
			</div>

			<div
				class="flex flex-col items-center justify-center rounded-full col-span-1 cursor-pointer"
			>
				<img
					class="w-60 h-60 rounded-full bg-[#EEEFFB] category-img p-2"
					:src="resolvePathUrl('images/shop/product/4.png')"
				/>
				<div class="mt-4 text-lg font-bold text-navy mx-auto">Wood</div>
			</div>

			<div
				class="flex flex-col items-center justify-center rounded-full col-span-1 cursor-pointer"
			>
				<img
					class="w-60 h-60 rounded-full bg-[#EEEFFB] category-img p-2"
					:src="resolvePathUrl('images/shop/product/9.png')"
				/>
				<div class="mt-4 text-lg font-bold text-navy mx-auto">Accessories</div>
			</div>
		</div>
	</div>
</template>

<style>
	.category-img {
		box-shadow: -6px 6px 6px -4px var(--accent);
	}
</style>

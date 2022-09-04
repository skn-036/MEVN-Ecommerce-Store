<script setup lang="ts">
	import ProductCard from '@/components/product/ProductCard.vue';
</script>

<template>
	<div class="container-padding w-full flex">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto">
			<ProductCard v-for="product in 6" :key="product" />
		</div>
	</div>
</template>

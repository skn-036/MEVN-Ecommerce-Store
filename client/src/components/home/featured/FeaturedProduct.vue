<script setup lang="ts">
	import { computed } from 'vue';
	import ProductCard from '@/components/product/ProductCard.vue';
</script>

<template>
	<div>
		<!-- title -->
		<h2 class="text-[42px] text-[#1A0B5B] font-bold mx-auto w-max mb-10">
			Featured Products
		</h2>

		<!-- featured products -->
		<ProductCard />
	</div>
</template>

<style scoped></style>

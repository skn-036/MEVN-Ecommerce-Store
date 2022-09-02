<script setup lang="ts">
	import Hero from '@/components/home/hero/Hero.vue';
	import FeaturedProduct from '@/components/home/featured/FeaturedProduct.vue';
</script>

<template>
	<div class="w-full mb-10">
		<!-- hero -->
		<div class="w-full">
			<Hero />
		</div>

		<!-- featured -->
		<FeaturedProduct class="w-full container-padding mt-20" />
	</div>
</template>

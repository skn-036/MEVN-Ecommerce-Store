<script setup lang="ts">
	import Hero from '@/components/home/hero/Hero.vue';
	import FeaturedProduct from '@/components/home/featured/FeaturedProduct.vue';
	import ProductTabs from '@/components/home/tabs/ProductTabs.vue';
	import OurOffers from '@/components/home/our-offers/OurOffers.vue';
</script>

<template>
	<div class="w-full mb-10">
		<!-- hero -->
		<div class="w-full">
			<Hero />
		</div>

		<!-- featured -->
		<FeaturedProduct class="w-full container-padding my-20" />

		<!-- product tabs -->
		<ProductTabs class="mb-20" />

		<!-- our offers -->
		<OurOffers />
	</div>
</template>

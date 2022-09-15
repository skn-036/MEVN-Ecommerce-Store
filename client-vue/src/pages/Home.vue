<script setup lang="ts">
	import Hero from '@/components/home/hero/Hero.vue';
	import FeaturedProducts from '@/components/home/featured/FeaturedProducts.vue';
	import ProductTabs from '@/components/home/tabs/ProductTabs.vue';
	import OurOffers from '@/components/home/our-offers/OurOffers.vue';
	import UniqueFeatures from '@/components/home/unique-features/UniqueFeatures.vue';
	import TrendingProducts from '../components/home/trending/TrendingProducts.vue';
	import TopCategories from '@/components/home/category/TopCategories.vue';
	import NewsLetter from '@/components/home/news-letter/NewsLetter.vue';
	import LatestBlog from '@/components/home/blogs/LatestBlog.vue';
</script>

<template>
	<div class="w-full mb-10">
		<!-- hero -->
		<div class="w-full container mx-auto">
			<Hero />
		</div>

		<!-- featured -->
		<FeaturedProducts class="w-full container-padding my-20" />

		<!-- product tabs -->
		<ProductTabs class="mb-20" />

		<!-- our offers -->
		<OurOffers />

		<!-- unique features -->
		<UniqueFeatures class="mt-20" />

		<!-- trending products -->
		<TrendingProducts class="mt-20" />

		<!-- categories -->
		<TopCategories class="mt-20" />

		<!-- newsletter -->
		<NewsLetter class="container mx-auto w-full mt-20" />

		<!-- blog -->
		<LatestBlog class="my-20" />
	</div>
</template>

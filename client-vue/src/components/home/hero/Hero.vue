<script setup lang="ts">
	import { ref } from 'vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Pagination, Autoplay } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';

	import { Slide } from '@/types/home/Slider';
	import HeroItem from '@/components/home/hero/HeroItem.vue';

	/**
	 * -------------------------------------------------------------------
	 * hero slides description. should come from database
	 * -------------------------------------------------------------------
	 */
	const slides = ref<ReadonlyArray<Slide>>([
		{
			imagePath: 'images/home/hero/h1.png',
			button: true,
			buttonProps: {
				title: 'Shop Now',
			},
			route: {
				name: 'shop',
			},
		},
		{
			imagePath: 'images/home/hero/h1.png',
			button: true,
			buttonProps: {
				title: 'Shop Now',
				background: '#7e33e0',
				hoverBackground: '#7e33e0',
			},
			route: {
				name: 'shop',
			},
		},
		{
			imagePath: 'images/home/hero/h1.png',
			button: true,
			buttonProps: {
				title: 'Shop Now',
				background: '#f39c12',
				hoverBackground: '#f39c12',
			},
			route: {
				name: 'shop',
			},
		},
		{
			imagePath: 'images/home/hero/h1.png',
			button: true,
			buttonProps: {
				title: 'Shop Now',
				background: '#40afcc',
				hoverBackground: '#40afcc',
			},
			route: {
				name: 'shop',
			},
		},
	]);
</script>

<template>
	<Swiper
		:spaceBetween="5"
		:centeredSlides="true"
		:autoplay="{
			delay: 3000,
			disableOnInteraction: true,
		}"
		:pagination="{
			clickable: true,
		}"
		:loop="true"
		:modules="[Pagination, Autoplay]"
		class="hero-swiper"
	>
		<SwiperSlide v-for="(slide, index) in slides" :key="index">
			<HeroItem :slide="slide" />
		</SwiperSlide>
	</Swiper>
</template>

<style>
	.hero-swiper .swiper-pagination.swiper-pagination-bullets {
		bottom: 50px !important;
	}

	.hero-swiper
		.swiper-pagination.swiper-pagination-bullets
		span.swiper-pagination-bullet {
		width: 0.8rem;
		height: 0.8rem;
		transform: rotate(45deg);
		border-radius: 0px;
		margin-right: 10px !important;
		background: var(--accent);
	}

	@media screen and (max-width: 768px) {
		.hero-swiper
			.swiper-pagination.swiper-pagination-bullets
			span.swiper-pagination-bullet {
			width: 0.5rem;
			height: 0.5rem;
		}
	}
</style>

<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import SwiperTypes from 'swiper/types';
	import { Autoplay } from 'swiper';
	import 'swiper/css';

	import ProductCard from '@/components/product/ProductCard.vue';

	const swiperInstance = ref<SwiperTypes.Swiper | null>(null);

	const handleMouseEnter = (): void => {
		if (swiperInstance.value) swiperInstance.value.autoplay.stop();
	};
	const handleMouseLeave = () => {
		if (swiperInstance.value) swiperInstance.value.autoplay.start();
	};
</script>

<template>
	<div class="w-full">
		<!-- title -->
		<h2
			class="text-2xl md:text-[42px] text-[#1A0B5B] font-bold mx-auto w-max h-max mb-10"
		>
			Featured Products
		</h2>

		<!-- featured products -->
		<div>
			<Swiper
				:slidesPerView="1"
				:spaceBetween="32"
				:centeredSlides="true"
				:autoplay="{
					delay: 2000,
					disableOnInteraction: true,
				}"
				:loop="true"
				:modules="[Autoplay]"
				class="featured-swiper"
				:breakpoints="{
					'768': {
						slidesPerView: 2,
					},
					'1220': {
						slidesPerView: 3,
					},
				}"
				@swiper="swiperInstance = $event"
				@mouseenter="handleMouseEnter"
				@mouseleave="handleMouseLeave"
			>
				<SwiperSlide v-for="a in 12" :key="a">
					<ProductCard class="mb-4" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

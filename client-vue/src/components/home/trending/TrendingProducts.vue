<script setup lang="ts">
	import { computed, ref } from 'vue';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import * as SwiperTypes from 'swiper';
	import { Autoplay } from 'swiper';
	import 'swiper/css';
	import useFile from '@/composables/app/useFile';

	import ProductCard from '@/components/product/ProductCard.vue';

	const { resolvePathUrl } = useFile();

	const swiperInstance = ref<SwiperTypes.Swiper | null>(null);

	const handleMouseEnter = (): void => {
		if (swiperInstance.value) swiperInstance.value.autoplay.stop();
	};
	const handleMouseLeave = () => {
		if (swiperInstance.value) swiperInstance.value.autoplay.start();
	};
</script>

<template>
	<div class="w-full container-padding">
		<!-- title -->
		<h2
			class="text-2xl md:text-[42px] text-navy font-bold mx-auto w-max h-max mb-16"
		>
			Trending Products
		</h2>

		<!-- trending products -->
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

		<!-- discounts -->
		<div class="mt-8 grid grid-cols-12 gap-4">
			<!-- first offer -->
			<div
				class="h-full bg-[#fff6fb] p-4 flex flex-col col-span-12 md:col-span-8 lg:col-span-4 justify-center"
			>
				<div class="text-navy text-lg font-bold">23% off in chairs</div>
				<div
					class="mt-1 text-accent cursor-pointer hover:underline font-medium"
				>
					Shop Now
				</div>
				<img
					class="ml-auto object-contain -translate-y-6"
					:src="resolvePathUrl('images/home/trending/2.png')"
				/>
			</div>
			<!-- second offer -->
			<div
				class="h-full bg-[#EEEFFB] p-4 flex flex-col col-span-12 md:col-span-8 lg:col-span-4"
			>
				<div class="text-navy text-lg font-bold">18% off in tables</div>
				<div
					class="mt-1 text-accent cursor-pointer hover:underline font-medium"
				>
					Shop Now
				</div>
				<img
					class="ml-auto object-contain translate-y-8"
					:src="resolvePathUrl('images/home/trending/1.png')"
				/>
			</div>

			<div
				class="h-full grid grid-cols-1 gap-2 grid-rows-3 col-span-12 md:col-span-8 lg:col-span-4"
			>
				<div class="flex flex-row cursor-pointer">
					<img
						class="w-24 h-24 mr-4 bg-[#EEEFFB]"
						:src="resolvePathUrl('images/shop/product/1.png')"
					/>
					<div class="my-auto text-navy">
						<span class="font-bold text-sm">Exclusive Seat Chair</span>
						<div class="flex flex-row">
							<span class="text-[#444] line-through mr-4">$105</span>
							<span class="font-bold">$88</span>
						</div>
					</div>
				</div>
				<div class="flex flex-row cursor-pointer">
					<img
						class="w-24 h-24 mr-4 bg-[#EEEFFB]"
						:src="resolvePathUrl('images/shop/product/2.png')"
					/>
					<div class="my-auto text-navy">
						<span class="font-bold text-sm">Exclusive Table</span>
						<div class="flex flex-row">
							<span class="text-[#444] line-through mr-4">$185</span>
							<span class="font-bold">$132</span>
						</div>
					</div>
				</div>
				<div class="flex flex-row cursor-pointer">
					<img
						class="w-24 h-24 mr-4 bg-[#EEEFFB]"
						:src="resolvePathUrl('images/shop/product/3.png')"
					/>
					<div class="my-auto text-navy">
						<span class="font-bold text-sm">Exclusive Wood Item</span>
						<div class="flex flex-row">
							<span class="text-[#444] line-through mr-4">$105</span>
							<span class="font-bold">$88</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

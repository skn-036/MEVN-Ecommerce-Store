<script setup lang="ts">
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { Pagination, Navigation, Autoplay } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
</script>

<template>
	<div class="w-full">
		<Swiper
			:spaceBetween="30"
			:centeredSlides="true"
			:autoplay="false"
			:pagination="{
				clickable: true,
			}"
			:navigation="true"
			:modules="[Pagination, Navigation, Autoplay]"
			class="my-swiper"
		>
			<SwiperSlide v-for="number in 3" :key="number"> </SwiperSlide>
		</Swiper>
	</div>
</template>

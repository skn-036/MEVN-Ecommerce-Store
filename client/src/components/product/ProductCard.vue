<script setup lang="ts">
	import { ref } from 'vue';
	// @ts-ignore
	import StarRating from 'vue-star-rating';
	import axios from '@/axios';
	import { AxiosResponse } from 'axios';

	import useFile from '@/composables/app/useFile';

	const products = ref([]);
	const getProducts = async () => {
		try {
			const response = await axios.get('products');
			console.log(response.data);
		} catch (error) {}
	};
	getProducts();

	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="w-[270px] rounded-sm shadow-md group cursor-pointer">
		<!-- image -->
		<div
			class="w-full h-52 bg-[#F6F7FB] flex items-center justify-center relative"
		>
			<img
				class="w-44 h-44"
				:src="resolvePathUrl('images/shop/product/11.png')"
			/>

			<!-- icons -->
			<div class="flex-row absolute top-4 left-4 hidden group-hover:flex">
				<FeatherIcon
					type="heart"
					size="20"
					class="mr-2 cursor-pointer"
					stroke="#FB2E86"
				/>
			</div>

			<!-- details button -->
			<button
				class="absolute py-1 px-4 bg-[#08D15F] text-white hidden group-hover:block text-base rounded-sm top-[95%] left-1/2 -translate-x-1/2 -translate-y-[95%]"
			>
				Add To Cart
			</button>
		</div>

		<!-- description -->
		<div
			class="flex flex-col items-center justify-center p-4 group-hover:bg-[#2F1AC4]"
		>
			<!-- title -->
			<h4
				class="text-lg text-accent font-bold font-lato group-hover:text-white"
			>
				Cool Chair
			</h4>

			<!-- star rating -->
			<StarRating
				:rating="4"
				:star-size="16"
				:max-rating="5"
				:show-rating="false"
				:read-only="true"
				active-color="rgb(250, 204, 21)"
			/>

			<!-- price -->
			<div class="flex flex-row mt-2">
				<span class="line-through mr-2 text-red-600 group-hover:text-gray-400">
					$56
				</span>
				<span
					class="text-[#151875] group-hover:text-gray-200 group-hover:font-bold"
				>
					$42
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

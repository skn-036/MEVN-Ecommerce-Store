<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="container-padding flex flex-col">
		<!-- heading -->
		<h2
			class="text-2xl md:text-[42px] text-[#1A0B5B] font-bold mx-auto w-max h-max mb-4"
		>
			Our Offers
		</h2>

		<!-- offers -->
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-4"
		>
			<!-- service card premium quality -->
			<div
				class="rounded-md shadow-lg shadow-slate-300 sha py-10 px-5 flex flex-col"
			>
				<img
					:src="resolvePathUrl('images/home/our-offers/premium-quality.png')"
					class="w-14 h-14 mb-4 mx-auto"
				/>
				<div class="mx-auto mb-2 text-[#1A0B5B] font-medium">
					Premium Quality
				</div>
				<div class="mx-auto text-center text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</div>

			<!-- service card 24/7 support -->
			<div
				class="rounded-md shadow-lg shadow-slate-300 sha py-10 px-5 flex flex-col"
			>
				<img
					:src="resolvePathUrl('images/home/our-offers/24-7-support.png')"
					class="w-14 h-14 mb-4 mx-auto"
				/>
				<div class="mx-auto mb-2 text-[#1A0B5B] font-medium">24/7 Support</div>
				<div class="mx-auto text-center text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</div>

			<!-- service card cashback -->
			<div
				class="rounded-md shadow-lg shadow-slate-300 sha py-10 px-5 flex flex-col"
			>
				<img
					:src="resolvePathUrl('images/home/our-offers/cashback.png')"
					class="w-14 h-14 mb-4 mx-auto"
				/>
				<div class="mx-auto mb-2 text-[#1A0B5B] font-medium">
					Cashback Guarantee
				</div>
				<div class="mx-auto text-center text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</div>

			<!-- service card free shipment -->
			<div
				class="rounded-md shadow-lg shadow-slate-300 sha py-10 px-5 flex flex-col"
			>
				<img
					:src="resolvePathUrl('images/home/our-offers/free-shipment.png')"
					class="w-14 h-14 mb-4 mx-auto"
				/>
				<div class="mx-auto mb-2 text-[#1A0B5B] font-medium">Free Shipment</div>
				<div class="mx-auto text-center text-sm text-gray-600">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</div>
			</div>
		</div>
	</div>
</template>

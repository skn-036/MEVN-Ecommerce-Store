<script setup lang="ts">
	import Info from '@/components/navbar/heading-bar/Info.vue';
	import Locale from '@/components/navbar/heading-bar/Locale.vue';
	import Currency from '@/components/navbar/heading-bar/Currency.vue';
	import Login from '@/components/navbar/heading-bar/Login.vue';
	import Wishlist from '@/components/navbar/heading-bar/Wishlist.vue';
	import Cart from '@/components/navbar/heading-bar/Cart.vue';
</script>

<template>
	<div class="bg-violet w-full">
		<div class="container-padding h-[44px] flex flex-row justify-between">
			<!-- info -->
			<Info class="md:flex flex-1 hidden" />

			<div
				class="flex-grow-0 ml-auto mr-auto md:mr-0 flex flex-row align-middle justify-end text-[#f1f1f1]"
			>
				<!-- locale selector -->
				<Locale class="my-auto mr-6 lg:mr-8" />

				<!-- currency selector -->
				<Currency class="my-auto mr-6 lg:mr-8 w-max" />

				<!-- Login -->
				<Login class="my-auto mr-6 lg:mr-8 w-max" />

				<!-- wishlist -->
				<Wishlist class="my-auto mr-6 lg:mr-8 w-max" />

				<!-- cart -->
				<Cart class="my-auto w-max" />
			</div>
		</div>
	</div>
</template>

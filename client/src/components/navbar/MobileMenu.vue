<script setup lang="ts">
	import { ref } from 'vue';
	import useAppConfig from '@/composables/app/useAppConfig';
	import Logo from '@/components/navbar/menu-bar/Logo.vue';
	import Menu from '@/components/navbar/menu-bar/Menu.vue';
	import Locale from '@/components/navbar/heading-bar/Locale.vue';
	import Currency from '@/components/navbar/heading-bar/Currency.vue';
	import Wishlist from '@/components/navbar/heading-bar/Wishlist.vue';
	import Cart from '@/components/navbar/heading-bar/Cart.vue';
	import Login from '@/components/navbar/heading-bar/Login.vue';

	const { showMobileMenu, toggleMobileMenu, authUser } = useAppConfig();
</script>

<template>
	<!-- mobile menu toggle -->
	<div class="ml-auto flex items-center lg:hidden">
		<FeatherIcon
			type="menu"
			size="24"
			stroke-width="2"
			class="my-auto cursor-pointer hover:scale-110 transition-all"
			@click="showMobileMenu = !showMobileMenu"
		/>
	</div>

	<!-- mobile menu -->
	<div
		class="font-lato fixed z-[99] block lg:hidden left-0 top-0 h-screen border-r border-gray-200 transition-all delay-300 w-[380px] max-w-full bg-white"
		:class="[showMobileMenu ? 'translate-x-0' : '-translate-x-[380px]']"
	>
		<!-- logo -->
		<div class="h-16 flex items-center border-b border-gray-200 px-6 w-full">
			<Logo @click="toggleMobileMenu()" />
			<div
				class="ml-auto flex items-center my-auto hover:scale-110 transition-all"
			>
				<FeatherIcon
					type="x"
					size="24"
					stroke-width="2"
					class="my-auto cursor-pointer"
					@click="toggleMobileMenu()"
				/>
			</div>
		</div>

		<!-- menu -->
		<Menu class="my-6 px-6" />

		<!-- locale -->
		<div class="pl-6 pr-16 pt-4 mb-10">
			<div class="flex flex-row justify-between mb-3 items-center">
				<div class="text-base font-bold text-navy">Account</div>
				<Login class="mt-1 text-navy" />
			</div>
			<div class="flex flex-row justify-between mb-3 items-center">
				<div class="text-base font-bold text-navy">Language</div>
				<Locale class="mt-1" />
			</div>
			<div class="flex flex-row justify-between mb-3 items-center">
				<div class="text-base font-bold text-navy">Currency</div>
				<Currency class="mt-1" />
			</div>
			<div
				class="flex flex-row justify-between mb-3 items-center text-navy font-bold"
			>
				<Wishlist />
				<Cart class="mt-1" />
			</div>
		</div>

		<!-- contact us -->
		<div class="px-6 mb-5 text-navy">
			<div class="font-bold mb-4 text-base">Contact us</div>
			<div
				class="flex flex-row align-baseline mb-3 font-lato text-base text-navy font-bold hover:text-accent cursor-pointer"
			>
				<FaIcon icon="fa-regular fa-envelope" class="mr-3 my-auto" />
				<div>hello@world.com</div>
			</div>
			<div
				class="flex flex-row align-baseline mb-3 font-lato text-base text-navy font-bold hover:text-accent cursor-pointer"
			>
				<FaIcon icon="fa-solid fa-phone-volume" class="mr-3 my-auto" />
				<div>(12345)67890</div>
			</div>
		</div>
	</div>

	<!-- mobile menu overlay -->
	<div
		v-if="showMobileMenu"
		class="fixed z-[98] w-screen h-screen top-0 left-0 bg-black opacity-20 block lg:hidden"
		@click="showMobileMenu = false"
	></div>
</template>

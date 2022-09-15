<script setup lang="ts">
	import Logo from '@/components/navbar/menu-bar/Logo.vue';
</script>

<template>
	<div class="w-full">
		<!-- main content -->
		<div
			class="bg-[#EEEFFB] container-padding py-20 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-[#8A8FB9] font-lato"
		>
			<!-- first col -->
			<div class="mx-4 centered flex-col">
				<Logo class="mb-auto" />
				<div class="mt-2 mb-4">
					<input
						type="text"
						class="block w-full px-3 py-1.5 h-10 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:shadow-sm focus:shadow-accent/50 focus:outline-none"
						placeholder="email address.."
					/>
					<button class="button-accent w-full mt-1">Subscribe</button>
				</div>
				<div>Contact info</div>
				<div class="mt-1">
					17 Princess Road, London, Greater London NW1 8JR, UK
				</div>
			</div>

			<!-- second col -->
			<div class="mx-4 centered flex-col">
				<div
					class="font-josefin text-[22px] text-black font-semibold mb-8 mt-4"
				>
					Categories
				</div>
				<div class="mb-3 cursor-pointer">New Chair</div>
				<div class="mb-3 cursor-pointer">Good Table</div>
				<div class="mb-3 cursor-pointer">Nice Furnitures</div>
				<div class="mb-3 cursor-pointer">Special Woods</div>
				<div class="mb-3 cursor-pointer">Antique items</div>
			</div>

			<!-- 3rd col -->
			<div class="mx-4 centered flex-col">
				<div
					class="font-josefin text-[22px] text-black font-semibold mb-8 mt-4"
				>
					Useful links
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'home' }">My Account</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'shop' }">Cart</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'blog' }">My orders</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'contact' }">Order tracking</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'about' }">Cancel order</RouterLink>
				</div>
			</div>

			<!-- 4th col -->
			<div class="mx-4 centered flex-col">
				<div
					class="font-josefin text-[22px] text-black font-semibold mb-8 mt-4"
				>
					Pages
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'home' }">Home</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
				</div>
				<div class="mb-3 cursor-pointer">
					<RouterLink :to="{ name: 'about' }">About us</RouterLink>
				</div>
			</div>
		</div>

		<!-- rights -->
		<div
			class="bg-[#E7E4F8] w-full container-padding flex flex-col items-center xs:flex-row justify-center xs:justify-between py-2 font-lato text-[#8A8FB9]"
		>
			<div class="mb-2 xs:mb-0 w-max">@skn - all rights reserved</div>
			<div class="flex flex-row items-center w-max">
				<div
					class="px-2 pb-0.5 cursor-pointer rounded-full bg-navy text-white mr-2"
				>
					<FeatherIcon type="facebook" size="10" />
				</div>
				<div
					class="px-2 pb-0.5 cursor-pointer rounded-full bg-navy text-white mr-2"
				>
					<FeatherIcon type="instagram" size="10" />
				</div>
				<div
					class="px-2 pb-0.5 cursor-pointer rounded-full bg-navy text-white mr-2"
				>
					<FeatherIcon type="twitter" size="10" />
				</div>
			</div>
		</div>
	</div>
</template>

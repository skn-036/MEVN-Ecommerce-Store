<script setup lang="ts">
	import { ref } from 'vue';
	import useAppConfig from '@/composables/app/useAppConfig';
	import Logo from './menu-bar/Logo.vue';
	import Menu from './menu-bar/Menu.vue';

	const { showMobileMenu, toggleMobileMenu } = useAppConfig();
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
		class="fixed z-[99] block lg:hidden left-0 top-0 h-screen border-r border-gray-200 transition-all delay-300 w-[380px] max-w-full bg-white"
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
	</div>

	<!-- mobile menu overlay -->
	<div
		v-if="showMobileMenu"
		class="fixed z-[98] w-screen h-screen top-0 left-0 bg-black opacity-20 block lg:hidden"
		@click="showMobileMenu = false"
	></div>
</template>

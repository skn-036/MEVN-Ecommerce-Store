<script setup lang="ts">
	import HeadingBar from '@/components/navbar/HeadingBar.vue';
	import MenuBar from '@/components/navbar/MenuBar.vue';
	import Footer from '@/components/footer/Footer.vue';
</script>

<template>
	<!-- navbar -->
	<div class="w-full">
		<header class="w-100 sticky top-0 z-[2]">
			<!-- heading bar -->
			<HeadingBar class="hidden lg:flex" />
			<MenuBar />
		</header>

		<!-- main content -->
		<main>
			<RouterView v-slot="{ Component }">
				<Transition name="route-slide" mode="out-in">
					<component :is="Component" />
				</Transition>
			</RouterView>
		</main>

		<!-- footer -->
		<footer>
			<Footer />
		</footer>
	</div>
</template>

<script setup lang="ts">
	import HeadingBar from '@/components/navbar/HeadingBar.vue';
	import MenuBar from '@/components/navbar/MenuBar.vue';
</script>

<template>
	<!-- navbar -->
	<div class="w-full">
		<div class="w-100 sticky top-0 z-[2]">
			<!-- heading bar -->
			<HeadingBar />
			<MenuBar />
		</div>

		<!-- main content -->
		<RouterView v-slot="{ Component }">
			<Transition name="route-slide" mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</div>
</template>

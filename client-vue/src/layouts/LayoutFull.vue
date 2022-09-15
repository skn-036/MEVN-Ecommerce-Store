<template>
	<!-- main content -->
	<main>
		<RouterView v-slot="{ Component }">
			<Transition name="route-slide" mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</main>
</template>

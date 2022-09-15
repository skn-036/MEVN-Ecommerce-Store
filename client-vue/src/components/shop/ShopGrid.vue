<script setup lang="ts">
	import ProductCard from '@/components/product/ProductCard.vue';

	interface Props {
		perpage: number;
	}

	const props = defineProps<Props>();
</script>

<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
	>
		<!-- products -->
		<div
			class="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
		>
			<div
				v-for="q in props.perpage"
				:key="q"
				class="w-100 flex justify-center"
			>
				<ProductCard class="!w-full max-w-[270px]" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import PerPageDropdown from './PerPageDropdown.vue';
	import SortByDropdown from './SortByDropdown.vue';

	interface Emit {
		(e: 'update-display', value: 'grid' | 'filter-grid'): void;
		(e: 'update-perpage', value: number): void;
	}
	const emit = defineEmits<Emit>();

	const display = ref<'grid' | 'filter-grid'>('filter-grid');
	emit('update-display', display.value);
</script>

<template>
	<div
		class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center"
	>
		<!-- title -->
		<div class="mb-6 lg:mb-0 flex flex-col">
			<div
				class="text-[22px] text-navy font-bold mx-auto lg:mx-0 text-center lg:text-left"
			>
				Search result for 'very good chair'
			</div>
			<div class="font-lato text-xs text-[#8A8FB9] mx-auto lg:mx-0">
				1233 results
			</div>
		</div>

		<!-- filter and search options -->
		<div class="flex flex-col items-center">
			<div class="flex flex-col sm:flex-row items-center mb-1">
				<div class="mr-4 flex flex-row items-center mb-2 mb-sm-0">
					<FeatherIcon
						type="list"
						size="16"
						class="py-1 px-1 cursor-pointer"
						:class="[
							display === 'filter-grid' ? 'text-white bg-accent' : 'text-navy',
						]"
						@click="
							display = 'filter-grid';
							emit('update-display', 'filter-grid');
						"
					/>
					<FeatherIcon
						type="grid"
						size="16"
						class="py-1 px-1 cursor-pointer"
						:class="[display === 'grid' ? 'text-white bg-accent' : 'text-navy']"
						@click="
							display = 'grid';
							emit('update-display', 'grid');
						"
					/>
				</div>
				<PerPageDropdown
					@update-perpage="$emit('update-perpage', $event)"
					class="mr-4 mb-2 mb-sm-0"
				/>
				<SortByDropdown class="mb-2 mb-sm-0" />
			</div>
			<div class="w-full flex flex-row">
				<input
					type="text"
					class="block flex-1 px-3 py-1.5 h-8 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:shadow-sm focus:shadow-accent/50 focus:outline-none"
				/>
				<div
					class="w-8 h-8 rounded-r-sm flex cursor-pointer bg-accent border border-accent text-white hover:bg-[#ef247c]"
				>
					<FaIcon
						icon="fa-solid fa-magnifying-glass"
						class="m-auto text-[16px]"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

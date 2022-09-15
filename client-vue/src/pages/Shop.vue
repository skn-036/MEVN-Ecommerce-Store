<script setup lang="ts">
	import { ref } from 'vue';
	import ShopHeader from '@/components/shop/ShopHeader.vue';
	import ShopGridWithFilter from '@/components/shop/ShopGridWithFilter.vue';
	import ShopGrid from '@/components/shop/ShopGrid.vue';

	const display = ref<'grid' | 'filter-grid'>('filter-grid');
	const perpage = ref<number>(12);
</script>

<template>
	<div class="w-full container-padding pt-12 pb-20">
		<!-- shop title -->
		<ShopHeader
			class="mb-10"
			@update-display="display = $event"
			@update-perpage="perpage = $event"
		/>

		<!-- pagination and result details -->
		<div
			class="flex flex-col md:flex-row items-center justify-center md:justify-between mb-3"
		>
			<!-- result details -->
			<div class="text-medium font-lato mb-2 md:mb-0">
				showing 13-26 products of 136
			</div>

			<!-- pagination -->
			<div class="">
				<nav
					class="isolate inline-flex -space-x-px rounded-md shadow-sm"
					aria-label="Pagination"
				>
					<span
						class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						:class="[
							true
								? '!cursor-not-allowed !text-gray-300 hover:!bg-white hover:!text-gray-300'
								: '',
						]"
					>
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>

					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						:class="[
							true
								? '!bg-accent !border-accent !text-white hover:!bg-accent !z-10'
								: '',
						]"
						>1</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						>2</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						>3</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
						>...</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						>8</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						>9</span
					>
					<span
						class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
						>10</span
					>
					<span
						href="#"
						class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-600 hover:bg-violet hover:border-violet hover:text-white cursor-pointer hover:z-10"
					>
						<span class="sr-only">Next</span>
						<!-- Heroicon name: mini/chevron-right -->
						<svg
							class="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</nav>
			</div>
		</div>

		<!-- grid with filter view -->
		<ShopGridWithFilter v-if="display === 'filter-grid'" :perpage="perpage" />

		<!-- grid without filter view -->
		<ShopGrid v-if="display === 'grid'" :perpage="perpage" />
	</div>
</template>

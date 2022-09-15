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
		<!-- filters -->

		<div
			class="flex flex-col justify-center md:justify-start items-center md:items-start"
		>
			<div>
				<!-- category filter -->
				<div class="mb-5 text-xl text-navy font-bold underline">Categories</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-2" type="checkbox" checked />
					<label for="checkbox-2" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-2"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>Chair</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-3" type="checkbox" checked />
					<label for="checkbox-3" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-3"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>Table</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-4" type="checkbox" />
					<label for="checkbox-4" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-4"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>This item</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-5" type="checkbox" />
					<label for="checkbox-5" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-5"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>That thing</label
					>
				</div>

				<div class="checkbox-group">
					<input id="checkbox-6" type="checkbox" />
					<label for="checkbox-6" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-6"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>Could be anything</label
					>
				</div>

				<!-- discount filter -->
				<div class="my-5 text-xl text-navy font-bold underline">Discounts</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-21" type="checkbox" />
					<label for="checkbox-21" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-21"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>below 10%</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-22" type="checkbox" />
					<label for="checkbox-22" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-22"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>10% - 25%</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-23" type="checkbox" />
					<label for="checkbox-23" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-23"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>26% - 50%</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-24" type="checkbox" />
					<label for="checkbox-24" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-24"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>more than 50%</label
					>
				</div>

				<!-- price range filter -->
				<div class="my-5 text-xl text-navy font-bold underline">Price</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-31" type="checkbox" />
					<label for="checkbox-31" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-31"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>below $100</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-32" type="checkbox" />
					<label for="checkbox-32" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-32"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>$100 - $199</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-33" type="checkbox" />
					<label for="checkbox-33" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-33"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>$200 - $299</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-34" type="checkbox" />
					<label for="checkbox-34" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-34"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>$300 - $399</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-35" type="checkbox" />
					<label for="checkbox-35" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-35"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>$400 - $499</label
					>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-36" type="checkbox" />
					<label for="checkbox-36" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-36"
						class="ml-2 text-sm font-medium text-gray-900 mt-1 cursor-pointer"
						>above $500</label
					>
				</div>

				<!-- rating filter -->
				<div class="my-5 text-xl text-navy font-bold underline">Rating</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-41" type="checkbox" />
					<label for="checkbox-41" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-41"
						class="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex flex-row"
					>
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" />
					</label>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-42" type="checkbox" />
					<label for="checkbox-42" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-42"
						class="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex flex-row"
					>
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" />
					</label>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-43" type="checkbox" />
					<label for="checkbox-43" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-43"
						class="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex flex-row"
					>
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" />
						<FeatherIcon type="star" size="18" />
					</label>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-44" type="checkbox" />
					<label for="checkbox-44" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-44"
						class="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex flex-row"
					>
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" />
					</label>
				</div>

				<div class="checkbox-group mb-2">
					<input id="checkbox-45" type="checkbox" />
					<label for="checkbox-45" class="checkbox checkbox-navy">
						<FeatherIcon type="check" size="12" stroke-width="3" />
					</label>
					<label
						for="checkbox-45"
						class="ml-2 text-sm font-medium text-gray-900 cursor-pointer flex flex-row"
					>
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" class="mr-1" fill="#FFD700" />
						<FeatherIcon type="star" size="18" fill="#FFD700" />
					</label>
				</div>
			</div>
		</div>

		<!-- products -->
		<div
			class="col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
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

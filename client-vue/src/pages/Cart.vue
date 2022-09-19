<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	import useFile from '@/composables/app/useFile';
	import * as bdDistricts from '@/data/json/district.json';

	const { resolvePathUrl } = useFile();

	const items = [
		{
			product: {
				image: 'images/shop/product/1.png',
				name: 'Some random product',
				desc: 'regular desc',
				meta: 'anotehr meta',
			},
			price: 40,
			quantity: 1,
			total: function () {
				return this.quantity * this.price;
			},
		},
		{
			product: {
				image: 'images/shop/product/2.png',
				name: 'Some random product 2',
				desc: 'regular desc 2',
				meta: 'anotehr meta 2',
			},
			price: 108,
			quantity: 4,
			total: function () {
				return this.quantity * this.price;
			},
		},
		{
			product: {
				image: 'images/shop/product/3.png',
				name: 'Some random product 3',
				desc: 'regular desc 3',
				meta: 'anotehr meta 3',
			},
			price: 93,
			quantity: 7,
			total: function () {
				return this.quantity * this.price;
			},
		},
	];
	const cartItems = ref(items);
	const updateItemQuantity = (current: number, inc: boolean = true): number => {
		if (inc) return current + 1;
		else if (current > 1) return current - 1;
		return current;
	};

	const cartTotal = computed<number>(() =>
		cartItems.value.reduce((total, item) => total + item.total(), 0)
	);

	const shippingDistrict = ref<string | null>(null);
	// search not implemented in the DOM
	const districtSearch = ref<string | null>(null);
	const districts = computed<string[]>(() => {
		let districts = bdDistricts.districts
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(dis => dis.name);

		if (!districtSearch.value) return districts;
		districts = districts.filter(
			dis =>
				districtSearch.value && dis.toUpperCase().includes(districtSearch.value)
		);
		return districts;
	});
	const shippingCost = computed(() =>
		shippingDistrict.value === 'Dhaka' ? 10 : shippingDistrict.value ? 70 : 0
	);
</script>

<template>
	<div class="w-full container-padding pt-12 pb-20">
		<!-- if there's items in cart -->
		<div v-if="cartItems && cartItems.length" class="w-full min-w-[460px]">
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
				<!-- cart items -->
				<div class="w-full col-span-1 lg:col-span-3">
					<table class="table-fixed w-full">
						<!-- header -->
						<thead class="text-xl text-navy font-bold">
							<tr class="align-middle">
								<th class="text-left">
									<div class="my-4 text-sm sm:text-xl">Product</div>
								</th>
								<th class="text-left w-16 sm:w-20 lg:w-36">
									<div class="my-4 text-sm sm:text-xl">Price</div>
								</th>
								<th class="text-left w-20 sm:w-36 lg:w-36">
									<div class="my-4 text-sm sm:text-xl">Quantity</div>
								</th>
								<th class="text-left w-20 sm:w-20 lg:w-36">
									<div class="my-4 text-sm sm:text-xl">Total</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								v-for="item in cartItems"
								:key="item.product.name"
								class="align-middle border-b border-gray-300 group"
							>
								<td>
									<div class="my-2 flex flex-row items-center">
										<div
											class="w-16 h-16 lg:w-24 lg:h-24 rounded-sm mr-3 border border-gray-100 relative"
										>
											<img
												:src="resolvePathUrl(item.product.image)"
												class="w-full h-full rounded-sm"
											/>
											<div
												class="w-4 h-4 cursor-pointer rounded-full bg-gray-900 text-white absolute hidden group-hover:flex items-center justify-center -right-2 -top-2"
											>
												<FeatherIcon type="x" size="14" />
											</div>
										</div>

										<div class="h-max truncate pr-4">
											<div class="!truncate">{{ item.product.name }}</div>
											<div class="text-xs text-[#A1A8C1] !truncate">
												{{ item.product.desc }}
											</div>
											<div class="text-xs text-[#A1A8C1] !truncate">
												{{ item.product.meta }}
											</div>
										</div>
									</div>
								</td>
								<td>
									<div class="my-2">${{ item.price }}</div>
								</td>
								<td>
									<div class="flex flex-row items-center my-2">
										<div
											class="w-8 h-8 flex items-center justify-center rounded-l-md border border-gray-400 hover:text-white hover:bg-navy hover:border-navy cursor-pointer"
											@click="
												item.quantity = updateItemQuantity(item.quantity, false)
											"
										>
											<FeatherIcon type="minus" size="16" stroke-width="2" />
										</div>
										<div
											class="w-8 sm:w-12 h-8 border-t border-b border-gray-400 px-2"
										>
											<input
												v-model="item.quantity"
												type="number"
												class="border-none outline-none focus:border-none active:border-none h-full w-full after:!appearance-none"
											/>
										</div>
										<div
											class="w-8 h-8 flex items-center justify-center rounded-r-md border border-gray-400 hover:text-white hover:bg-navy hover:border-navy cursor-pointer"
											@click="item.quantity = updateItemQuantity(item.quantity)"
										>
											<FeatherIcon type="plus" size="16" stroke-width="2" />
										</div>
									</div>
								</td>
								<td>
									<div class="my-2">${{ item.total() }}</div>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="mt-4 w-full flex justify-end">
						<button class="button-accent">Clear cart</button>
					</div>
				</div>

				<!-- total section -->
				<div class="col-span-1">
					<!-- cart total-->
					<div class="w-full">
						<!-- header -->
						<div class="mt-4 mb-6 sm:text-xl text-sm text-navy font-bold">
							Cart Total
						</div>
						<!-- checkout -->
						<div
							class="w-full p-4 bg-[#E8E6F1] rounded-md border border-gray-200 shadow-lg mb-8"
						>
							<div
								class="py-2 border-b border-gray-300 font-lato text-navy flex flex-row justify-between items-center"
							>
								<div class="text-lg font-semibold">Subtotal</div>
								<div>${{ cartTotal }}</div>
							</div>

							<div
								class="py-2 border-b border-gray-300 font-lato text-navy flex flex-row justify-between items-center"
							>
								<div class="text-lg font-semibold">Shipping</div>
								<div>${{ shippingCost }}</div>
							</div>

							<div
								class="py-2 border-b border-gray-300 font-lato text-navy flex flex-row justify-between items-center"
							>
								<div class="text-lg font-semibold">Total</div>
								<div>${{ cartTotal + shippingCost }}</div>
							</div>
							<div class="my-5 flex flex-row items-center">
								<div
									class="w-5 h-4 rounded-full bg-[#19D16F] text-white flex items-center justify-center mr-3"
								>
									<FeatherIcon type="check" size="10" />
								</div>
								<div class="text-[#8A91AB] font-lato text-xs">
									Shipping cost is calculated at checkout
								</div>
							</div>
							<div class="w-full">
								<button
									class="button-green w-full"
									@click="$router.push({ name: 'checkout' })"
								>
									Proceed to checkout
								</button>
							</div>
						</div>

						<!-- calculate shipping -->
						<!-- header -->
						<div class="mt-4 mb-4 sm:text-xl text-sm text-navy font-bold">
							Calculate shipping
						</div>
						<div
							class="w-full bg-[#E8E6F1] rounded-md border border-gray-200 shadow-lg mb-8"
						>
							<div
								class="py-2 font-lato text-navy flex flex-row justify-between items-center"
							>
								<Menu as="div" class="relative inline-block text-left w-full">
									<div>
										<MenuButton
											v-slot="{ open }"
											class="my-auto flex flex-row justify-between text-navy text-[16px] px-4 py-1 rounded-md w-full"
										>
											<span class="mr-2 my-auto">{{
												shippingDistrict ? shippingDistrict : 'District'
											}}</span>
											<FaIcon
												icon="fa-solid fa-chevron-down"
												class="text-[11px] my-auto transition-transform ease-in-out duration-500"
												:class="open ? ' rotate-180' : ''"
											/>
										</MenuButton>
									</div>

									<Transition
										enter-active-class="transition duration-100 ease-out"
										enter-from-class="transform scale-95 opacity-0"
										enter-to-class="transform scale-100 opacity-100"
										leave-active-class="transition duration-75 ease-in"
										leave-from-class="transform scale-100 opacity-100"
										leave-to-class="transform scale-95 opacity-0"
									>
										<MenuItems
											class="absolute z-[99] bg-white left-0 mt-2 w-full origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-56 overflow-y-scroll"
										>
											<div
												v-for="district in districts"
												:key="district"
												class="px-1 py-1"
											>
												<MenuItem
													v-slot="{ active }"
													@click="shippingDistrict = district"
												>
													<div
														class="cursor-pointer px-4 py-1 rounded-sm text-sm"
														:class="[
															active ? 'bg-violet text-white' : 'text-gray-900',
														]"
													>
														{{ district }}
													</div>
												</MenuItem>
											</div>
										</MenuItems>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- if there's no item in cart -->
		<div class="w-full h-[70vh] flex items-center justify-center" v-else>
			<div
				class="w-11/12 md:w-3/4 lg:w-4/5 xl:w-1/2 flex flex-col items-center justify-center text-navy"
			>
				<div class="text-center font-bold mb-2 text-xl">No items in Cart</div>
				<div
					class="flex flex-row items-center text-accent hover:underline cursor-pointer"
					@click="$router.push({ name: 'shop' })"
				>
					<FeatherIcon type="shopping-bag" class="mr-2" size="14" />
					<div class="font-medium">Shop now</div>
				</div>
			</div>
		</div>
	</div>
</template>

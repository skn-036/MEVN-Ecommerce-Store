<script setup lang="ts">
	import { ref } from 'vue';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

	interface Currency {
		title: string;
		icon: string;
	}

	const currencies: Currency[] = [
		{ title: 'USD', icon: '$' },
		{ title: 'BDT', icon: '৳' },
		{ title: 'SAR', icon: 'ر.س' },
	];
	const activeCurrency = ref<Currency>(currencies[0]);

	const setCurrency = (currency: Currency): void => {
		activeCurrency.value = currency;
	};
</script>

<template>
	<div class="w-max text-right">
		<Menu as="div" class="relative inline-block text-left">
			<div>
				<MenuButton
					v-slot="{ open }"
					class="my-auto flex flex-row text-[#f1f1f1] text-[16px]"
				>
					<span class="mr-2 my-auto">{{ activeCurrency.title }}</span>
					<FaIcon
						icon="fa-solid fa-chevron-down"
						class="text-[11px] my-auto transition-transform ease-in-out duration-500"
						:class="open ? ' rotate-180' : ''"
					/>
				</MenuButton>
			</div>

			<transition
				enter-active-class="transition duration-100 ease-out"
				enter-from-class="transform scale-95 opacity-0"
				enter-to-class="transform scale-100 opacity-100"
				leave-active-class="transition duration-75 ease-in"
				leave-from-class="transform scale-100 opacity-100"
				leave-to-class="transform scale-95 opacity-0"
			>
				<MenuItems
					class="absolute right-0 z-[99] bg-white mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div
						v-for="currency in currencies"
						:key="currency.title"
						class="px-1 py-1"
					>
						<MenuItem v-slot="{ active }" @click="setCurrency(currency)">
							<button
								class="flex flex-row"
								:class="[
									active ? 'bg-violet text-white' : 'text-gray-900',
									'group flex w-full items-center rounded-md px-2 py-2 text-sm',
								]"
							>
								<span class="mr-2">{{ currency.icon }}</span>
								<span>{{ currency.title }}</span>
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</transition>
		</Menu>
	</div>
</template>

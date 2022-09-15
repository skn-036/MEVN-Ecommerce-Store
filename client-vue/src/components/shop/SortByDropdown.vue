<script setup lang="ts">
	import { ref } from 'vue';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

	const options: string[] = [
		'Best match',
		'Price ascending',
		'Rrice decending',
		'Rating',
		'Featured',
		'Trending',
		'Latest',
	];
	const activeOption = ref<string>(options[0]);
</script>

<template>
	<div class="flex flex-row items-center">
		<div class="mr-2 text-navy font-lato">Sortby:</div>
		<Menu as="div" class="relative inline-block text-left">
			<div>
				<MenuButton
					v-slot="{ open }"
					class="my-auto w-48 flex flex-row justify-between text-navy text-[16px] border border-gray-200 px-4 py-1 rounded-md"
				>
					<span class="mr-2 my-auto">{{ activeOption }}</span>
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
					class="absolute z-[99] bg-white left-0 mt-2 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div v-for="option in options" :key="option" class="px-1 py-1">
						<MenuItem v-slot="{ active }" @click="activeOption = option">
							<div
								class="cursor-pointer px-4 py-1 rounded-sm text-sm"
								:class="[active ? 'bg-violet text-white' : 'text-gray-900']"
							>
								{{ option }}
							</div>
						</MenuItem>
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

	import ArFlag from '@/components/navbar/heading-bar/svg/ArFlag.vue';
	import BnFlag from '@/components/navbar/heading-bar/svg/BnFlag.vue';
	import EnFlag from '@/components/navbar/heading-bar/svg/EnFlag.vue';

	import useUtils from '@/composables/app/useUtils';

	const { wordCapitalize } = useUtils();

	interface Locale {
		title: 'English' | 'Bangla' | 'Arabic';
		locale: 'en' | 'bn' | 'ar';
	}

	const locales: Locale[] = [
		{ title: 'English', locale: 'en' },
		{ title: 'Bangla', locale: 'bn' },
		{ title: 'Arabic', locale: 'ar' },
	];

	const activeLocale = ref<Locale>(locales[0]);

	const setLocale = (locale: Locale): void => {
		activeLocale.value = locale;
	};

	const resolveLocaleFlag = (locale: Locale): string => {
		console.log(`${wordCapitalize(locale.locale)}Flag`);
		return `${wordCapitalize(locale.locale)}Flag`;
	};
</script>

<template>
	<div class="w-max text-right">
		<Menu as="div" class="relative inline-block text-left">
			<div>
				<MenuButton
					v-slot="{ open }"
					class="my-auto flex flex-row text-navy lg:text-[#f1f1f1] text-[16px]"
				>
					<span class="mr-2 my-auto">{{ activeLocale.title }}</span>
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
					class="absolute z-[99] bg-white right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				>
					<div v-for="locale in locales" :key="locale.locale" class="px-1 py-1">
						<MenuItem v-slot="{ active }" @click="setLocale(locale)">
							<button
								class="flex flex-row"
								:class="[
									active ? 'bg-violet text-white' : 'text-gray-900',
									'group flex w-full items-center rounded-md px-2 py-2 text-sm',
								]"
							>
								<ArFlag
									v-if="locale.locale === 'ar'"
									class="w-8 h-4 mr-2 rounded-md"
								/>
								<BnFlag
									v-if="locale.locale === 'bn'"
									class="w-8 h-4 mr-2 rounded-md"
								/>
								<EnFlag
									v-if="locale.locale === 'en'"
									class="w-8 h-4 mr-2 rounded-md"
								/>
								<span>{{ locale.title }}</span>
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</transition>
		</Menu>
	</div>
</template>

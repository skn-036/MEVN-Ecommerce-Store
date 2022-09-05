<script setup lang="ts">
	import { ref } from 'vue';
	import NewArrival from './NewArrival.vue';
	import BestSeller from './BestSeller.vue';
	import Featured from './Featured.vue';
	import SpecialOffer from './SpecialOffer.vue';

	type Tab = 'New Arrival' | 'Best Seller' | 'Featured' | 'Special Offer';
	const tabs: Tab[] = [
		'New Arrival',
		'Best Seller',
		'Featured',
		'Special Offer',
	];

	const activeTab = ref<Tab>(tabs[0]);
</script>

<template>
	<div class="w-full flex flex-col">
		<!-- heading -->
		<h2
			class="text-2xl md:text-[42px] text-[#1A0B5B] font-bold mx-auto w-max h-max mb-1"
		>
			Our Products
		</h2>

		<!-- tabs -->
		<div
			class="w-max max-w-[75%] mx-auto flex flex-row gap-6 flex-wrap mb-8 justify-center"
		>
			<span
				v-for="tab in tabs"
				:key="tab"
				class="text-base font-medium cursor-pointer"
				:class="activeTab === tab ? 'text-accent underline' : 'text-[#151875]'"
				@click="activeTab = tab"
			>
				{{ tab }}
			</span>
		</div>

		<!-- products -->
		<TransitionGroup
			enter-from-class="scale-75 opacity-0"
			enter-active-class="transition-all delay-300 ease-in"
			enter-to-class="scale-100 opacity-100"
		>
			<!-- New arrival -->
			<NewArrival v-if="activeTab === 'New Arrival'" />

			<!-- Best Seller -->
			<BestSeller v-if="activeTab === 'Best Seller'" />

			<!-- Featured -->
			<Featured v-if="activeTab === 'Featured'" />

			<!-- Special Offer -->
			<SpecialOffer v-if="activeTab === 'Special Offer'" />
		</TransitionGroup>
	</div>
</template>

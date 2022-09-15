<script setup lang="ts">
	import useFile from '@/composables/app/useFile';
	const { resolvePathUrl } = useFile();
</script>

<template>
	<div class="w-full rounded-md shadow-sm border border-gray-100 p-0 m-0 group">
		<img
			class="w-full h-auto rounded-t-md"
			:src="resolvePathUrl('images/blog/2dcYhvbHV-M.png')"
		/>
		<div class="flex flex-row mt-4 items-center mx-4">
			<div class="flex flex-row items-center mr-4">
				<FeatherIcon
					type="pen-tool"
					class="-rotate-90 mr-1 text-accent"
					size="14"
				/>
				<div class="text-navy text-sm">Saber Ali</div>
			</div>
			<div class="flex flex-row items-center">
				<FeatherIcon
					type="calendar"
					class="rotate-90 mr-1 text-orange-600"
					size="14"
				/>
				<div class="text-navy text-sm">29th August, 2022</div>
			</div>
		</div>
		<div class="my-6 text-lg text-navy font-bold mx-4 group-hover:text-accent">
			Top esssential Trends in 2021
		</div>
		<div class="font-lato text-medium mx-4">
			More off this less hello samlande lied much over tightly circa horse taped
			mightly
		</div>
		<div
			class="cursor-pointer font-lato text-navy underline my-4 mx-4 group-hover:text-accent"
		>
			Read More
		</div>
	</div>
</template>

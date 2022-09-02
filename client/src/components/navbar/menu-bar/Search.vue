<script setup lang="ts"></script>

<template>
	<div class="flex flex-row">
		<input
			type="text"
			class="block w-72 px-3 py-1.5 h-10 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent focus:shadow-sm focus:shadow-accent/50 focus:outline-none"
		/>
		<div
			class="w-10 h-10 rounded-r-sm flex cursor-pointer bg-accent text-white hover:bg-[#ef247c]"
		>
			<FaIcon icon="fa-solid fa-magnifying-glass" class="m-auto text-[16px]" />
		</div>
	</div>
</template>

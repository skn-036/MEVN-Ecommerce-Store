<script setup lang="ts">
	const contactEmail = 'hello@world.com';
	const contactNumber = '(12345)67890';
</script>
<template>
	<div class="my-auto flex-row align-middle">
		<div class="flex flex-row mr-8 align-baseline">
			<FaIcon
				icon="fa-regular fa-envelope"
				class="text-[16px] text-white mr-3 my-auto"
			/>
			<div class="text-[#f1f1f1]">{{ contactEmail }}</div>
		</div>
		<div class="flex flex-row">
			<FaIcon
				icon="fa-solid fa-phone-volume"
				class="text-[16px] text-white mr-3 my-auto"
			/>
			<div class="text-[#f1f1f1]">{{ contactNumber }}</div>
		</div>
	</div>
</template>

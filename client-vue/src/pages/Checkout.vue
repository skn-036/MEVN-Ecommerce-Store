<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
	import * as bdDistricts from '@/data/json/district.json';
	import useAppConfig from '@/composables/app/useAppConfig';
	import useFile from '@/composables/app/useFile';
	import axios from '@/axios';
	import { AxiosResponse, AxiosError } from 'axios';

	const { authUser, cssRootVariables } = useAppConfig();
	const { resolvePathUrl } = useFile();

	/**
	 * --------------------------------------------------------------------------------
	 * Calculate shipping cost
	 * --------------------------------------------------------------------------------
	 */
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

	/**
	 * --------------------------------------------------------------------------------
	 * Calculate price
	 * --------------------------------------------------------------------------------
	 */
	const cartTotal = ref<number>(1120);
	const vat = ref<number>(0);
	const shippingCost = computed<number>(() =>
		shippingDistrict.value === 'Dhaka' ? 10 : shippingDistrict.value ? 70 : 0
	);
	const total = computed<number>(
		() => cartTotal.value + vat.value + shippingCost.value
	);

	/**
	 * --------------------------------------------------------------------------------
	 * payment method
	 * --------------------------------------------------------------------------------
	 */
	const paymentMethod = ref<'stripe' | 'paypal' | null>(null);
	const paymentIntentLoading = ref<boolean>(false);
	const highlightError = ref<boolean>(false);

	/**
	 * --------------------------------------------------------------------------------
	 * payment submission(stripe)
	 * --------------------------------------------------------------------------------
	 */
	// @ts-ignore
	const stripe = Stripe(process.env.CLIENT_STRIPE_PUBLIC_KEY);
	const stripepaymentIntentLoaded = ref<boolean>(false);
	const onBuy = async (): Promise<void> => {
		paymentIntentLoading.value = true;

		// // if not all the required fields filled highlight error message
		// // will be added later after validating form submission

		// for (let i = 0; i < 3; i++) {
		// 	await new Promise(resolve => {
		// 		setTimeout(() => {
		// 			highlightError.value = true;
		// 			resolve('');
		// 		}, 500);
		// 	});
		// 	await new Promise(resolve => {
		// 		setTimeout(() => {
		// 			highlightError.value = false;
		// 			resolve('');
		// 		}, 500);
		// 	});
		// }

		try {
			const response: AxiosResponse = await axios.post(
				'/api/checkout/create-stripe-intent',
				{
					amount: 1400,
					currency: 'usd',
				}
			);
			if (response.data && response.data.clientSecret) {
				const appearance = {
					theme: 'stripe',
					variables: {
						colorPrimary: cssRootVariables.value['--accent'],
						colorText: cssRootVariables.value['--navy'],
						fontFamily: 'Josefin Sans, sans-serif',
					},
				};
				const elements = stripe.elements({
					appearance,
					clientSecret: response.data.clientSecret,
				});
				const paymentElement = elements.create('payment');
				await paymentElement.mount('#stripe-payment-element');

				stripepaymentIntentLoaded.value = true;
			}
			paymentIntentLoading.value = false;
		} catch (error) {
			paymentIntentLoading.value = false;
			if (error instanceof AxiosError) console.log(error.response);
		}
	};
</script>

<template>
	<div class="w-full container-padding pt-12 pb-20">
		<!-- container -->
		<div class="w-full grid grid-cols-1 lg:grid-cols-9 gap-8">
			<!-- contact form  -->
			<div
				class="lg:col-span-5 rounded-md border border-gray-200 bg-[#fdfdfd] shadow-lg p-6 lg:p-10"
			>
				<!-- user information -->
				<div class="text-xl text-navy font-bold mb-4">Contact details*</div>

				<!-- form input rows -->
				<div class="w-full grid grid-cols-1 md:grid-cols-1 gap-8">
					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Name..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="email"
							placeholder="Email..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Contact number..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Address..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div v-if="!authUser" class="px-1">
						<div class="checkbox-group">
							<input id="checkbox-3" type="checkbox" class="peer" checked />
							<label
								for="checkbox-3"
								class="checkbox checkbox-accent peer-checked:border-accent"
							>
								<FeatherIcon type="check" size="12" stroke-width="3" />
							</label>
							<label
								for="checkbox-3"
								class="ml-2 font-medium text-gray-400 mt-1 cursor-pointer peer-checked:text-accent"
								>create account during checkout</label
							>
						</div>
					</div>
				</div>

				<div class="text-xl text-navy font-bold mt-12 mb-4">
					Shipping district*
				</div>

				<!-- form input rows -->
				<div class="w-full grid grid-cols-1 md:grid-cols-1 gap-8">
					<div class="px-1">
						<Menu
							as="div"
							class="relative inline-block text-left w-full"
							v-slot="{ open }"
						>
							<div class="w-full input-bottom-border-animate">
								<MenuButton
									class="my-auto flex flex-row justify-between text-[16px] py-1 w-full trigger"
									:class="[
										open
											? 'text-accent active'
											: shippingDistrict
											? 'text-gray-900'
											: 'text-gray-400',
									]"
								>
									<div class="mr-2 my-auto">
										{{ shippingDistrict ? shippingDistrict : 'District' }}
									</div>
									<FaIcon
										icon="fa-solid fa-chevron-down"
										class="text-[11px] my-auto transition-transform ease-in-out duration-500"
										:class="open ? ' rotate-180' : ''"
									/>
								</MenuButton>
								<span class="bg-accent animate"></span>
								<span></span>
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
													active ? 'bg-accent text-white' : 'text-gray-900',
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

				<div class="text-xl text-navy font-bold mt-12 mb-4">
					Shipping details*
				</div>

				<!-- form input rows -->
				<div class="w-full grid grid-cols-1 md:grid-cols-1 gap-8">
					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Name...*"
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="email"
							placeholder="Email..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Contact number..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Address..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="input-bottom-border-animate">
						<input
							type="text"
							placeholder="Order note(optional)..."
							class="focus:text-accent placeholder:focus:text-accent"
						/>
						<span class="bg-accent animate"></span>
						<span></span>
					</div>

					<div class="px-1">
						<div class="checkbox-group">
							<input id="checkbox-3" type="checkbox" class="peer" checked />
							<label
								for="checkbox-3"
								class="checkbox checkbox-accent peer-checked:border-accent"
							>
								<FeatherIcon type="check" size="12" stroke-width="3" />
							</label>
							<label
								for="checkbox-3"
								class="ml-2 font-medium text-gray-400 mt-1 cursor-pointer peer-checked:text-accent"
								>Same as contact details</label
							>
						</div>
					</div>
				</div>
			</div>

			<!-- checkout -->
			<div
				class="lg:col-span-4 rounded-md border border-gray-200 bg-[#fdfdfd] shadow-lg p-6 lg:p-10 h-full"
			>
				<!-- cart quantity -->
				<div class="w-full font-lato text-navy border-b border-gray-200">
					<div class="flex flex-row items-center justify-between mb-4">
						<div class="text-lg font-bold">Subtotal</div>
						<div class="">${{ cartTotal }}</div>
					</div>
					<div class="flex flex-row items-center justify-between mb-4">
						<div class="text-lg font-bold">Shipping cost</div>
						<div class="">${{ shippingCost }}</div>
					</div>
					<div class="flex flex-row items-center justify-between mb-4">
						<div class="text-lg font-bold">Vat</div>
						<div class="">${{ vat }}</div>
					</div>
					<div class="flex flex-row items-center justify-between mb-4">
						<div class="text-lg font-bold">Total</div>
						<div class="">${{ total }}</div>
					</div>
				</div>
				<!-- gutter -->
				<div class="w-full h-6"></div>
				<!-- payment method selection -->
				<div
					class="text-navy overflow-hidden transition-max-height delay-300 ease-out"
					:class="stripepaymentIntentLoaded ? 'max-h-0' : 'max-h-max'"
				>
					<div class="text-xl text-navy font-bold mb-4">
						<div>Select Payment method</div>

						<div
							class="text-sm text-red-600 font-bold"
							:class="[highlightError ? 'opacity-80 scale-[1.02]' : '']"
						>
							** Please fill contact & shipping information **
						</div>
					</div>

					<!-- stripe -->
					<div
						class="flex flex-row items-center font-lato font-bold mb-2 justify-between"
					>
						<label
							for="stripe"
							class="flex flex-row items-center cursor-pointer flex-1"
						>
							<img
								:src="
									resolvePathUrl(
										'images/checkout/creative-credit-card-design_48190-435-removebg-preview.png'
									)
								"
								class="w-16 h-auto mr-2 -ml-2"
							/>
							<div>Credit card</div>
						</label>
						<div class="checkbox-group">
							<input
								v-model="paymentMethod"
								id="stripe"
								type="radio"
								value="stripe"
								class="peer"
							/>
							<label
								for="stripe"
								class="checkbox checkbox-accent peer-checked:border-accent"
							>
								<FeatherIcon type="check" size="12" stroke-width="3" />
							</label>
						</div>
					</div>

					<!-- paypal -->
					<div
						class="flex flex-row items-center font-lato font-bold mb-6 justify-between"
					>
						<label
							for="paypal"
							class="flex flex-row items-center cursor-pointer flex-1"
						>
							<img
								:src="
									resolvePathUrl(
										'images/checkout/paypal-logo-removebg-preview.png'
									)
								"
								class="w-16 h-auto mr-2 scale-110"
							/>
							<div>Paypal</div>
						</label>
						<div class="checkbox-group">
							<input
								v-model="paymentMethod"
								id="paypal"
								type="radio"
								value="paypal"
								class="peer"
							/>
							<label
								for="paypal"
								class="checkbox checkbox-accent peer-checked:border-accent"
							>
								<FeatherIcon type="check" size="12" stroke-width="3" />
							</label>
						</div>
					</div>

					<!-- buy button -->
					<div class="w-full">
						<!-- 	
									opacity-50 & cursor-not-allowed class is to be added dynamically if contact info
									contact info not given properly
						 -->
						<button
							class="button-accent w-full flex items-center justify-center"
							@click="onBuy"
						>
							<div
								v-if="paymentIntentLoading"
								class="flex flex-row items-center"
							>
								<svg
									class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								<div>Loading...</div>
							</div>
							<div v-else>Buy</div>
						</button>
					</div>
				</div>

				<!-- stripe payment intent -->
				<div
					v-show="stripepaymentIntentLoaded"
					class="text-xl text-navy font-bold mb-4"
				>
					Paying with credit card
				</div>
				<form
					v-show="stripepaymentIntentLoaded"
					class="w-full rounded-sm border border-gray-200 shadow-sm p-3 bg-white"
				>
					<div id="stripe-payment-element"></div>
					<button type="submit" class="w-full button-accent mt-4">
						Make payment
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<style></style>

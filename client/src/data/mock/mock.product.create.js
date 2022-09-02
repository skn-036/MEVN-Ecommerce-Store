const Titles = [
	'Good Chair',
	'Yellow Chair',
	'CantilEver Chair',
	'Comfort Chair',
	'Sleeping Chair',
	'Jim Chair',
];

const desc =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum quae laudantium ducimus rem, similique dolorum voluptatibus maxime est ipsa nulla sapiente a neque laboriosam iusto distinctio vitae atque! Molestias?';
const category = ['chair', 'comfort', 'sleep'];
const discountType = ['percent', 'amount'];
const discountAmount = [
	0, 5, 0, 10, 0, 15, 0, 20, 0, 25, 0, 30, 0, 40, 0, 35, 0, 45, 0, 50,
];
const rating = [1, 2, 3, 4, 5];
const ratingMessage = [
	'Good product',
	'amazing!! best I have seen',
	'Disappointed very bad product',
	'highly recommended',
	'lorem ipsum dolor sit',
	'Laborum harum quae laudantium ducimus rem',
	'similique dolorum voluptatibus maxime',
];

const randomItemFromArray = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};
const a = () => {
	let all = [];
	for (let i = 1; i <= 100; i++) {
		let arr = [...Array(Math.floor(Math.random() * 10)).keys()];
		let ratings = arr.reduce((prev, current) => {
			const ab = [
				{
					user: current + 1,
					value: randomItemFromArray(rating),
					message: randomItemFromArray(ratingMessage),
				},
			];
			// @ts-ignore
			return prev.concat(ab);
		}, []);
		let product = {
			id: i,
			name: randomItemFromArray(Titles),
			description: desc,
			category: randomItemFromArray(category),
			price: randomItemFromArray([...Array(250).keys()].filter(a => a > 100)),
			url: `images/shop/product/${randomItemFromArray(
				[...Array(11).keys()].filter(a => a > 0)
			)}.png`,
			featured: randomItemFromArray([true, false]),
			trending: randomItemFromArray([true, false]),
			latest: randomItemFromArray([true, false]),
			stock: randomItemFromArray([...Array(300).keys()]),
			sales: randomItemFromArray([...Array(500).keys()]),
			discount: {
				type: randomItemFromArray(discountType),
				value: randomItemFromArray(discountAmount),
			},
			ratings,
		};
		all.push(product);
	}
	console.log(all);
	return all;
};

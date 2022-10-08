//! product list
const productListELement = document.querySelector('#product-list');
const productInputElement = document.querySelector('.new-product-input');
const productImgElement = document.querySelector('#image-input');
const formElement = document.querySelector('form');
const errorText = document.querySelector('#error-text');

const todos = [
	{
		id: 0,
		todo: "Kitob o'qish",
		isCompleted: false,
	},
	{
		id: 1,
		todo: "Kitob o'qish",
		isCompleted: false,
	},
];

const products = [
	{
		id: 1,
		name: 'kartoshka',
		price: 15,
		location: 'Tashkent',
		img: 'https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/b50214c53b9e73eb22aa6970b47dd7cf.jpg',
	},
	{
		id: 2,
		name: 'piyoz',
		price: 7,
		location: 'Tashkent',
		img: 'https://shifo.uz/upload/iblock/3e9/3e996757a60eccf7eca955e1d2e5a907.jpg',
	},
	{
		id: 3,
		name: 'sabzi',
		price: 12,
		location: 'Tashkent',
		img: '',
	},
	{
		id: 4,
		name: 'olma',
		price: 23,
		location: 'Tashkent',
		img: '',
	},
];

function addListHandler(array, list) {
	for (let i = 0; i < array.length; i++) {
		const newLi = document.createElement('li');

		const img = document.createElement('img');
		const span = document.createElement('span');
		const title = document.createElement('p');

		title.className = 'text-primary';
		title.textContent = i + 1 + ' ' + array[i].name;
		span.className = 'text-danger';
		span.textContent = ' Narxi:' + array[i].price;

		img.setAttribute('src', array[i].img);
		img.setAttribute('width', 200);

		newLi.appendChild(title);
		newLi.appendChild(img);
		newLi.appendChild(span);

		list.appendChild(newLi);
	}
}

formElement.addEventListener('submit', function (e) {
	e.preventDefault();

	const textInput = productInputElement.value;
	const imgInput = productImgElement.value;

	if (textInput !== '' && imgInput !== '') {
		const newProduct = {
			id: products.length + 1,
			name: textInput,
			img: imgInput,
		};

		let hasProduct = false;
		for (let i = 0; i < products.length; i++) {
			if (products[i].name === textInput) {
				hasProduct = true;
			}
		}

		if (!hasProduct) {
			products.unshift(newProduct);
			errorText.textContent = '';
		} else {
			errorText.textContent = 'Bu mahsulot sizda mavjud';
		}

		productListELement.textContent = '';
		productInputElement.value = '';
		productImgElement.value = '';

		addListHandler(products, productListELement);
	} else {
		errorText.textContent = "Iltimos ma'lumotlarni to'ldiring";
	}
});

addListHandler(products, productListELement);

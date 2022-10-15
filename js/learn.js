//! Tab
const title = document.querySelector('#title');
const description = document.querySelector('#description');

function homeFunction() {
	title.textContent = 'Home';
	description.textContent = 'description';
	title.className = 'animate__animated animate__fadeIn';
}
function aboutFunction() {
	title.textContent = 'About';
	description.textContent = 'description2';
	title.className = 'animate__animated animate__fadeIn';
}
function contactFunction() {
	title.textContent = 'Contact';
	description.textContent = 'description3';
	title.className = 'animate__animated animate__fadeIn';
}
//

forms.addEvente('submit', () => {
	const title = input.value;
	const img = input.value;
	const overview = input.value;

	const obj = {
		id: '287947',
		title: title,
		poster: img,
		overview: overview,
		release_date: 1665644873352,
		genres: ['Action', 'Comedy', 'Fantasy'],
	};

	films.unshift(obj);

	renderFilms(films, elCards);
});

//
cardImg.className = 'card-img-top';
cardImg.src = element.poster;
cardImg.alt = element.title;

cardBody.className = 'card-body';

cardTitle.className = 'card-title';
cardTitle.textContent = element.title;

cardOverview.className = 'card-text';
cardOverview.textContent = element.overview;

cardDate.className = 'text-primary';
cardDate.textContent = element.release_date;

cardGenres.textContent = element.genres;

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardOverview);
cardBody.appendChild(cardDate);
cardBody.appendChild(cardGenres);

card.appendChild(cardImg);
card.appendChild(cardBody);

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

//word

const words = 'kartoshka piyoz sabzi shorbodring karamiddinjon olma';

// words.split(' ').forEach((element) => {
// 	console.log(element);
// });

function longWord(text) {
	const array = text.split(' ');
	let longWord = array[0];

	for (let i = 1; i < array.length; i++) {
		if (longWord.length < array[i].length) {
			longWord = array[i];
		}
	}
	array.forEach(function (item, i, nimadir) {
		if (longWord.length < item.length) {
			longWord = item;
		}
	});
	return longWord;
}

console.log(longWord(words));

// const elInput = document.querySelector('#space');
// const elForm = document.querySelector('form');
// const elImage = document.querySelector('#main-image');

// function formValidation(result, elementImage) {
// 	if (result.length >= 6 && !isNaN(result)) {
// 		elementImage.setAttribute(
// 			'src',
// 			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0YPNvDPMgqcsDb48GCzTudWD3v_K0hP_Ok09gr7W&s'
// 		);
// 	} else {
// 		console.log('ishlamadi');
// 	}
// }

// const formHandler = function (e) {
// 	e.preventDefault();

// 	const inputResult = elInput.value.trim();

// 	formValidation(inputResult, elImage);
// };

// elForm.addEventListener('submit', formHandler);

// ! time finder with function
const elForm = document.querySelector('.form');
const elInput = document.querySelector('#space');
const elResultPerson = document.querySelector('.result-time-person');
const elResultBycycle = document.querySelector('.result-time-bycycle');
const elResultCar = document.querySelector('.result-time-car');
const elResultPlane = document.querySelector('.result-time-plane');

const personSpeed = 3.6;
const bycycleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

function timeFinder(speed, space = Number(elInput.value)) {
	const totalTime = space / speed;
	const hour = Math.floor(totalTime);
	const minuteTotal = (totalTime - hour) * 60;
	const minute = Math.floor(minuteTotal);
	const second = Math.round((minuteTotal - minute) * 60);

	const result = `${hour} soat ${minute} daqiqa ${second} soniya`;

	return result;
}

const formHandler = function (e) {
	e.preventDefault();

	elResultPerson.textContent = `Piyoda ${timeFinder(
		personSpeed
	)} yetib keladi`;
	elResultBycycle.textContent = `Piyoda ${timeFinder(
		bycycleSpeed
	)} yetib keladi`;
	elResultCar.textContent = `Piyoda ${timeFinder(carSpeed)} yetib keladi`;
	elResultPlane.textContent = `Piyoda ${timeFinder(planeSpeed)} yetib keladi`;
};

elForm.addEventListener('submit', formHandler);

// function isEven(a) {
// 	if (a % 2 === 0) {
// 		return a;
// 	} else {
// 		return 'son toq son';
// 	}
// }

// console.log(isEven(13));
// ! function
// const number = 12;
// let result = null;

// // declaration
// function pifagorCalculator(katet1, katet2) {
// 	result = Math.sqrt(katet1 * katet1 + katet2 * katet2);
// 	console.log(result);
// }

// // expression

// const addNumber = function nimadir(a, b) {
// 	console.log(a + b);
// };

// addNumber(3, 2);

// pifagorCalculator(6, 8);
// pifagorCalculator(3, 4);

// const elForm = document.querySelector('.form');

// const text = 'Davron';
// const elInput = document.querySelector('#space');

// elForm.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const result = elInput.value.trim();

// 	console.log(result);

// });

// for (let i = 0; i > 10; i++) {
// 	console.log(i);
// }

// let i = 0;
// while (i > 10) {
// 	console.log(i);
// 	i++;
// }

// do {
// 	console.log(i);
// 	i++;
// } while (i > 10);

//! string methods
// const elForm = document.querySelector('.form');

// const text = 'Davron';
// const elInput = document.querySelector('#space');

// elForm.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const result = elInput.value.trim();

// 	console.log(result.toLowerCase());
// });

// ==  faqat value bo'yicha tekshiradi
// === qiymat va tur (data type) bo'yicha tekshiradi

// ! time finder app
// const elForm = document.querySelector('.form');
// const elInput = document.querySelector('#space');
// const elResultPerson = document.querySelector('.result-time-person');
// const elResultBycycle = document.querySelector('.result-time-bycycle');
// const elResultCar = document.querySelector('.result-time-car');
// const elResultPlane = document.querySelector('.result-time-plane');

// const personSpeed = 3.6;
// const bycycleSpeed = 20.1;
// const carSpeed = 70;
// const planeSpeed = 800;

// elForm.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const resultSpace = Number(elInput.value);

// 	const totalTimePerson = resultSpace / personSpeed;
// 	const hourPerson = Math.floor(totalTimePerson);
// 	const minutePersonTotal = (totalTimePerson - hourPerson) * 60;
// 	const minutePerson = Math.floor(minutePersonTotal);
// 	const secondPerson = Math.round((minutePersonTotal - minutePerson) * 60);

// 	const totalTimeBycycle = resultSpace / bycycleSpeed;
// 	const hourBycycle = Math.floor(totalTimeBycycle);
// 	const minuteBycycle = Math.floor((totalTimeBycycle - hourBycycle) * 60);

// 	const totalTimeCar = resultSpace / carSpeed;
// 	const hourCar = Math.floor(totalTimeCar);
// 	const minuteCar = Math.floor((totalTimeCar - hourCar) * 60);

// 	const totalTimePlane = resultSpace / planeSpeed;
// 	const hourPlane = Math.floor(totalTimePlane);
// 	const minutePlane = Math.floor((totalTimePlane - hourPlane) * 60);

// 	elResultPerson.textContent = `Piyoda ${hourPerson} soat ${minutePerson} daqiqa ${secondPerson} soniyada yetib keladi`;
// 	elResultBycycle.textContent = `Piyoda ${hourBycycle} soat ${minuteBycycle} daqiqada yetib keladi`;
// 	elResultCar.textContent = `Piyoda ${hourCar} soat ${minuteCar} daqiqada yetib keladi`;
// 	elResultPlane.textContent = `Piyoda ${hourPlane} soat ${minutePlane} daqiqada yetib keladi`;
// });

// // alert('Hello world!');
// const userMoney = prompt('Pulingizni kiriting');
// const userAge = prompt('yoshingizni kiriting');

// const usd = 1;
// const euro = 2;

// let ticket = 5;
// let hotel = 2;

// let fun = 1;

// let usdToSum = (ticket + hotel) * usd;
// let euroToSum = fun * euro;

// let totalAmount = usdToSum + euroToSum;
// console.log(userMoney, totalAmount);
// // 1         && and           0

// if (userMoney >= totalAmount || userAge >= 18) {
// 	alert("sayohatingiz maroqli o'tsin");
// } else {
// 	let needMoney = totalAmount - userMoney;
// 	alert(
// 		`sayohatga bora olmaysiz. \nsizga yana ${needMoney} so'm yetmayabdi `
// 	);
// }

// // var number1 = prompt(`1- qiymatni kiriting`);
// // var number2 = prompt('2- qiymatni kiriting');

// // var result = Number(number1) + Number(number2);
// // console.log(result);

// // var a = 10;
// // var b = 5;

// // console.log(a + b);

// // Nan not a number

// // console.log(name2 + 2);

// //  Davron Sulaymonov

// // console.log('Davron' + 'Sulaymonov');
// //          12 - 2 = 10
// //  string + number = string
// // number + number = number;
// // string + string = string;

// // console.log('12' - '2');

// // const age = Number(prompt('yoshingizni kiriting'));
// // const year = Number(prompt('yil kiriting'));

// // let result = year - 2022 + age;

// // if (age >= 20) {
// // 	console.log('salom');
// // }

// // var number = 12;
// // // number++;

// // number -= 12; // number = number + 12

// // // alert(`sizning ${year}-yildagi yoshingiz ${result} `);
// // console.log(number);
// // console.log(number);
// // alert('1 yildan keyingi yoshingiz' +  result2);
// // var a = 8 * 4 / 2 / 2;
// // alert(a);

// // var number = -12.5999993;
// // console.log(number);
// // var result = Math.floor(number);
// // var result2 = Math.ceil(number);
// // var result3 = Math.round(number);

// // console.log(result, result2, result3);

// // var randomNumber = Math.floor(Math.random() * 10) + 1; // [0,10] ,

// // var number = (12.23123123123).toFixed(5);
// // console.log(number);

// // var userMoney = prompt('Pulingizni kiriting');

// // const usd = 11650.34;
// // const euro = 10650.03;

// // var ticket = 500;
// // var hotel = 250;

// // var fun = 120;

// // var usdToSum = (ticket + hotel) * usd;
// // var euroToSum = fun * euro;

// // var totalAmount = usdToSum + euroToSum;
// // console.log(userMoney);
// // alert(userMoney - totalAmount + ' mana shuncha pulingiz ortib qoldi');

// // var user = 'Number1';
// // var user = 'Number2';
// // user = 'boshqa qiymat';

// // let name = 'Davron';
// // //let name = 'Temur'; // redeclare qilib bo'lmaydi
// // name = 'Temur';

// // const surname = 'Temuraliyev';
// // // const surname = 'boshqa';
// // surname = 'Norqulov';
// // console.log(surname);

// // imtihon

// const elementTitle = document.querySelector('#ball');
// const result = document.querySelector('#result');

// const number = Number(prompt('balingizni kiriting!'));

// if (isNaN(number)) {
// 	alert('iltimos bal kiriting');
// }

// elementTitle.textContent += number;

// if (number > 0 && number <= 80) {
// 	result.style.color = 'red';
// 	result.innerHTML = "<strong>o'qishdan yiqildingiz </strong>";
// } else if (number > 80 && number <= 100) {
// 	result.textContent = 'superkontraktga kirdingiz';
// } else if (number > 100 && number <= 150) {
// 	result.innerHTML = "kontrakt asosida o'qishga kirdingiz";
// } else if (number > 150 && number <= 180) {
// 	result.textContent = 'byudjetga kirdingiz';
// } else {
// 	alert("noto'g'ri raqam kiritdingiz");
// }

// const elForm = document.querySelector('#form');
// const elName = document.querySelector('#name');
// const elEmail = document.querySelector('#email');
// const elNumber = document.querySelector('#number');
// const elText = document.querySelector('#text');
// const elResultName = document.querySelector('#result-name');
// const elResultEmail = document.querySelector('#result-email');
// const elResultText = document.querySelector('#result-text');

// const elHelloButton = document.querySelector('#hello-button');

// elForm.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	if (elName.value !== '') {
// 		elResultName.textContent = 'Ismingiz: ';
// 		elResultText.textContent = 'Fikringiz: ';
// 		elResultEmail.textContent = 'Emailingiz: ';

// 		elResultName.textContent += elName.value;
// 		elResultText.textContent += elText.value;
// 		elResultEmail.textContent += elEmail.value;

// 		elName.className += ' success';
// 		elText.className += ' success';

// 		elEmail.value = '';
// 		elText.value = '';
// 		elName.value = '';
// 	} else {
// 		elResultName.textContent = 'iltimos ismingizni kiriting!';
// 		elName.style.border = '1px solid red';
// 	}
// });

// elHelloButton.addEventListener('mouseover', function () {
// 	elHelloButton.textContent = 'Salom dunyo';
// });
// elHelloButton.addEventListener('mouseout', function () {
// 	elHelloButton.textContent = 'xayr dunyo';
// });

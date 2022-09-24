// alert('Hello world!');
const userMoney = prompt('Pulingizni kiriting');
const userAge = prompt('yoshingizni kiriting');

const usd = 1;
const euro = 2;

let ticket = 5;
let hotel = 2;

let fun = 1;

let usdToSum = (ticket + hotel) * usd;
let euroToSum = fun * euro;

let totalAmount = usdToSum + euroToSum;
console.log(userMoney, totalAmount);
// 1         && and           0

if (userMoney >= totalAmount || userAge >= 18) {
	alert("sayohatingiz maroqli o'tsin");
} else {
	let needMoney = totalAmount - userMoney;
	alert(
		`sayohatga bora olmaysiz. \nsizga yana ${needMoney} so'm yetmayabdi `
	);
}

// var number1 = prompt(`1- qiymatni kiriting`);
// var number2 = prompt('2- qiymatni kiriting');

// var result = Number(number1) + Number(number2);
// console.log(result);

// var a = 10;
// var b = 5;

// console.log(a + b);

// Nan not a number

// console.log(name2 + 2);

//  Davron Sulaymonov

// console.log('Davron' + 'Sulaymonov');
//          12 - 2 = 10
//  string + number = string
// number + number = number;
// string + string = string;

// console.log('12' - '2');

// const age = Number(prompt('yoshingizni kiriting'));
// const year = Number(prompt('yil kiriting'));

// let result = year - 2022 + age;

// if (age >= 20) {
// 	console.log('salom');
// }

// var number = 12;
// // number++;

// number -= 12; // number = number + 12

// // alert(`sizning ${year}-yildagi yoshingiz ${result} `);
// console.log(number);
// console.log(number);
// alert('1 yildan keyingi yoshingiz' +  result2);
// var a = 8 * 4 / 2 / 2;
// alert(a);

// var number = -12.5999993;
// console.log(number);
// var result = Math.floor(number);
// var result2 = Math.ceil(number);
// var result3 = Math.round(number);

// console.log(result, result2, result3);

// var randomNumber = Math.floor(Math.random() * 10) + 1; // [0,10] ,

// var number = (12.23123123123).toFixed(5);
// console.log(number);

// var userMoney = prompt('Pulingizni kiriting');

// const usd = 11650.34;
// const euro = 10650.03;

// var ticket = 500;
// var hotel = 250;

// var fun = 120;

// var usdToSum = (ticket + hotel) * usd;
// var euroToSum = fun * euro;

// var totalAmount = usdToSum + euroToSum;
// console.log(userMoney);
// alert(userMoney - totalAmount + ' mana shuncha pulingiz ortib qoldi');

// var user = 'Number1';
// var user = 'Number2';
// user = 'boshqa qiymat';

// let name = 'Davron';
// //let name = 'Temur'; // redeclare qilib bo'lmaydi
// name = 'Temur';

// const surname = 'Temuraliyev';
// // const surname = 'boshqa';
// surname = 'Norqulov';
// console.log(surname);

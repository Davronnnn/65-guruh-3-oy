const number = Number(prompt('son kiriting'));

// number % 3 === 0  --> Fizz
// number % 5 === 0  --> Buzz
// number % 15 === 0  --> FizzBuzz
// else  --> number

if (number % 15 == 0) {
	console.log('FizzBuzz');
} else if (number % 3 == 0) {
	console.log('Fizz');
} else if (number % 5 == 0) {
	console.log('Buzz');
} else {
	console.log(number);
}

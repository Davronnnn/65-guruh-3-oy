function isEven(num) {
	if (num % 2 === 0 && num > 10) {
		return 'soningiz juft son va 10 dan katta';
	} else {
		return 'soningiz toq yoki 10 dan kichkina';
	}
}

console.log(isEven(8));

const elementTitle = document.querySelector('#ball');
const result = document.querySelector('#result');

const number = Number(prompt('balingizni kiriting!'));

elementTitle.textContent += number;

console.log(number);
if (number > 0 && number <= 80) {
	result.style.color = 'red';
	result.innerHTML = "<strong>o'qishdan yiqildingiz </strong>";
} else if (number > 80 && number <= 100) {
	result.textContent = 'superkontraktga kirdingiz';
} else if (number > 100 && number <= 150) {
	result.innerHTML = "kontrakt asosida o'qishga kirdingiz";
} else if (number > 150 && number <= 180) {
	result.textContent = 'byudjetga kirdingiz';
} else {
	alert("noto'g'ri raqam kiritdingiz");
}

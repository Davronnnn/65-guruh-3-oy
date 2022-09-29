const elForm = document.querySelector('.form');

const text = 'Davron';
const elInput = document.querySelector('#space');

elForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const result = elInput.value.trim();

	console.log(result.toLowerCase());
});

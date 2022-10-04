const elInput = document.querySelector('#space');
const elForm = document.querySelector('form');
const elImage = document.querySelector('#main-image');

const formHandler = function (e) {
	e.preventDefault();

	const inputResult = elInput.value.trim();

	const newH2 = document.createElement('h2');

	const h2TextContent =
		inputResult > 18 ? 'voyaga yetgansiz' : 'voyaga yetmagansiz';

	newH2.textContent = h2TextContent;
	newH2.style.color = inputResult > 18 ? 'green' : 'red';
	elForm.appendChild(newH2);
};

elForm.addEventListener('submit', formHandler);

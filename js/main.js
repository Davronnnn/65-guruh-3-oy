const elUserList = document.querySelector('#users-list');

const renderFilms = function (array, parentElement) {
	for (let i = 0; i < array.length; i++) {
		const user = array[i];
		const newLi = document.createElement('li');

		newLi.className = 'list-item border m-5 p-3 text-center';
		newLi.innerHTML = `
                        <h3 >${user.name}</h3>
						<p>${user.username}</p>
						<p>${user.email}</p>
						<p>${user.phone}</p>
						<p>${
							user.address.street +
							' ' +
							user.address.suite +
							' ' +
							user.address.city
						}</p>
						<p>${user.company.name} <span>${user.company.catchPhrase}</span></p>
    `;

		parentElement.appendChild(newLi);
	}
};

renderFilms(users, elUserList);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const index = array.indexOf(8);
const findIndex = users.findIndex((element) => element.id === 8);

// console.log(array.includes(3, 5));
const fillArray = array.reverse();

// find findIndex Filter indexOf

const result = users.filter((element) => element.id !== 3);

console.log(fillArray);

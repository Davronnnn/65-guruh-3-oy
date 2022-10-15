const elForm = document.querySelector('#form');
const elCards = document.querySelector('.cards');
const elSearch = document.querySelector('#search');
const toggleText = document.querySelector('#toggle');

function formToggleHandler(e) {
	if (toggleText.textContent === '+') {
		elForm.style.display = 'block';
		toggleText.textContent = '-';
	} else {
		elForm.style.display = 'none';
		toggleText.textContent = '+';
	}
}

function renderFilms(array, parentElement = elCards) {
	parentElement.textContent = '';

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const genres = element.genres;

		const card = document.createElement('div');
		const ulGenres = document.createElement('ul');

		let normalDate = new Date(element.release_date).toLocaleString(
			'en-GB',
			{
				timeZone: 'UTC',
			}
		);

		for (let i = 0; i < genres.length; i++) {
			const element = genres[i];

			const elGenre = document.createElement('li');

			elGenre.textContent = element;

			ulGenres.appendChild(elGenre);
		}

		card.className = 'card';
		card.style.width = '18rem';

		card.innerHTML = `
		<img
			class='card-img-top'
			src=${element.poster}
			alt=${element.title}
		/>
		<div class='card-body'>
			<h5 class='card-title'>${element.title}</h5>
			<p class='card-text'>
				${element.overview}
			</p>
			<p class='text-primary'>${normalDate}</p>
		</div>
	`;
		card.appendChild(ulGenres);

		parentElement.appendChild(card);
	}
}

elSearch.addEventListener('input', (e) => {
	e.preventDefault();

	const searchText = elSearch.value.trim().toLowerCase();
	const filteredArray = [];
	films.forEach((film) => {
		if (film.title.toLowerCase().includes(searchText)) {
			filteredArray.push(film);
		}
	});

	renderFilms(filteredArray);
});

elForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const title = e.target[0].value;
	const img = e.target[1].value;
	const overview = e.target[2].value;
	const date = e.target[3].value;
	const genres = e.target[4].value;

	if (title && img && overview && date && genres) {
		const newFilm = {
			id: String(Number(films[films.length - 1].id) + 1 || 0),
			title: title,
			poster: img,
			overview: overview,
			release_date: date,
			genres: [genres],
		};
		films.unshift(newFilm);
		renderFilms(films);
	} else {
		alert("ma'lumotlarni to'ldiring");
	}
});

renderFilms(films);

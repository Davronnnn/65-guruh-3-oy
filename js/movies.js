const elForm = document.querySelector('#form');
const elCards = document.querySelector('.cards');
const elSearch = document.querySelector('#search');
const toggleText = document.querySelector('#toggle');
const elGenresSelect = document.querySelector('#genres');
const templateFilm = document.querySelector('#film-template');

const genres = [];

function genresFinder(array) {
	array.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!genres.includes(genre)) {
				genres.push(genre);
			}
		});
	});
}

function filmDescription(e) {
	console.log(e.target);
}

function renderGenres(array, parent) {
	array.forEach((genre) => {
		const newOption = document.createElement('option');
		newOption.setAttribute('value', genre);
		newOption.textContent = genre;
		parent.appendChild(newOption);
	});
}

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

		let normalDate = new Date(element.release_date).toLocaleString(
			'en-GB',
			{
				timeZone: 'UTC',
			}
		);

		const clone = templateFilm.content.cloneNode(true);
		const card = clone.querySelector('.card');
		const title = clone.querySelector('.card-title');
		const img = clone.querySelector('.card-img-top');
		const overview = clone.querySelector('.card-text');
		const date = clone.querySelector('.text-primary');
		const ul = clone.querySelector('ul');
		const btn = clone.querySelector('.btn');
		btn.dataset.id = element.id;
		console.log(btn);
		for (let i = 0; i < genres.length; i++) {
			const element = genres[i];
			const elGenre = document.createElement('li');
			elGenre.className = 'list-group-item';
			elGenre.textContent = element;
			ul.appendChild(elGenre);
		}

		title.textContent = element.title;
		img.src = element.poster;
		overview.textContent = element.overview;
		date.textContent = normalDate;

		parentElement.appendChild(card);
	}
}

elGenresSelect.addEventListener('change', (e) => {
	const value = e.target.value;
	let filteredArray = [];

	if (value === 'all') {
		filteredArray = films;
	} else {
		films.forEach((film) => {
			film.genres.forEach((genre) => {
				if (genre == value) {
					filteredArray.push(film);
				}
			});
		});
	}
	renderFilms(filteredArray);
});

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

genresFinder(films);
renderGenres(genres, elGenresSelect);
renderFilms(films);

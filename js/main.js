const elCards = document.querySelector('.cards');

const renderFilms = (array, parentElement) => {
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

		card.setAttribute('title', 'salom');
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
};

renderFilms(films, elCards);

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

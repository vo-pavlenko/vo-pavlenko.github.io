const searchForm = document.querySelector('#search-form'),
			movie = document.querySelector("#movies");

function apiSearch(event) {
	event.preventDefault();
	
	const searchText = document.querySelector('.form-control').value,
				server = 'https://api.themoviedb.org/3/search/multi?api_key=f5e0f2b2620868dbe96819b738c4f694&language=ru&query='+searchText;
	
	requestApi('GET', server);
}

function requestApi(method, url) {
	const request = new XMLHttpRequest();

	request.open(method, url);
	request.send();

	request.addEventListener('readystatechange', function() {
		if (request.readyState !== 4) return;

		if (request.status !== 200) {
			console.log('error: ' + request.status);
			return;
		}

		const output = JSON.parse(request.responseText);

		let inner = ''

		output.results.forEach(function(item, i, array){
			let nameItem = item.name || item.title,
				dateItem = item.first_air_date || item.release_date;

			inner += `<div class="col-12 col-md-4 col-xl-3">${nameItem} (${da})</div>`;
		});

		movie.innerHTML = inner;
	});
}

searchForm.addEventListener('submit', apiSearch);
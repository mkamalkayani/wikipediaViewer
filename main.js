$(document).ready( function() {

	const searchBar = $('input[name=search');
	searchBar.change(function(){
		fetchData( $(this).val() );
	})

	searchBar.click(function(){
		$(this).val("");
	})	

	function fetchData(searchTerm){
		const URL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;

		fetch(URL)
		.then(function(response) {
			return response.json();
		}).then(function(response){
			updateSearchResults(response);
		})
	}

	function updateSearchResults(response){
		// console.log(response);
		const $searchResults = $('.search-results');
		$searchResults.empty();

		for(let i=0; i<10;i++){

			var text = `<div class="search-item">
			<a href="${response[3][i]}" target="_blank">		
			<p class="title">${response[1][i]}</p>
			</a>
			<p class="link">${response[3][i]}<p>
			<p class="discription">${response[2][i]}</p>
			</div>`;
		// console.log(text);

		$searchResults.append(text);
	}
}


});


// $searchResults.append('<p class="search-title">' + response[1][0] + '</p>');
		// $searchResults.append('<p class="search-description">' + response[2][0] + '</p>');
		// $searchResults.append('<p class="search-link">' + response[3][0] + '</p>');
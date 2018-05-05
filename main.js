$(document).ready( function() {

	// Get the search results when user presses Enter
	const searchBar = $('input[name=search');
	searchBar.change(function(){
		$('.header').removeClass('header').addClass('header-as');
		fetchData( $(this).val() );
	})

	// // Clear the search bar
	// searchBar.click(function(){
	// 	$(this).val("");
	// })

	// Get the search results when user clicks the button
	$('.search-buttons .btn').click(function(){
		$('.header').removeClass('header').addClass('header-as');
		fetchData( $(searchBar).val() );
	})

	// Reload the page
	$('img').click(function(){
		location.reload();
	}) 

	function fetchData(searchTerm){
		const URL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;

		fetch(URL)
		.then(function(response) {
			return response.json();
		})
		.then(function(response){
			// console.log(response);
			if(response[1].length !== 10){
				return console.log("error");
			}
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

// catch(invalid search){
// 	consol.log('invalid search')
// }


});
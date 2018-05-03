$(document).ready( function() {

	var URL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=butterfly&format=json&origin=*";
	fetch(URL)
  .then(function(response) {
    return response.json();
  }).then(function(response){
  	console.log(response);
  })
	
});
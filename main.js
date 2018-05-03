$(document).ready( function() {
	var URL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert%20Einstein";
	fetch(URL)
  .then(function(response) {
    console.log(response);
  })
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
	
});
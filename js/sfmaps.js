// Google API Key: AIzaSyD7HxGWeXcLObUQXJvUnJsC9WPKLlnLKLY


function initMap(){
	var myLatLng = { lat: 37.773972, lng: -122.431297 };
		map = new google.maps.Map(document.getElementById('newSFMap'), {
		zoom: 11,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
        });
}




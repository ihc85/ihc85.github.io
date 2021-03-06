// Current Location Scripts
$(function () {
	var status = $('#status');
	$(document).ready(getGeoLocation);

	function getGeoLocation() {
		status.text('Getting Location...');
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var lat = position.coords.latitude;
				var long = position.coords.longitude;

				// Call the getData function, send the lat and long
				getData(lat, long);

			});
		} else {
			status.text("Your browser doesn't support Geolocation or it is not enabled!");
		}

	};

	// Get the data from the wunderground API
	function getData(lat, long) {
		$.ajax({
			url: "https://api.wunderground.com/api/0374d8d7218313b5/geolookup/conditions/q/" + lat + "," + long + ".json",
			// Used to have the same as above, except requesting geolocation, not conditions
			dataType: "jsonp",
			success: function (parsed_json) {
				var location = parsed_json['location']['city'] + ", " + parsed_json['location']['state'];
				var temp_f = parsed_json['current_observation']['temp_f'];
				$("#currentTemp").text("Current temperature in " + location + " is: " + temp_f);
				$("#summary").html(temp_f + "&#8457");
				$("#summary").text(toTitleCase(parsed_json.current_observation.icon));
				$("#cover").fadeOut(250);
				console.log(parsed_json);
			}


			//		xhr.send();
		});
	}

	// A function for changing a string to TitleCase
	function toTitleCase(str) {
		return str.replace(/\w+/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
});

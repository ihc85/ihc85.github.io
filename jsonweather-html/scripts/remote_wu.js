// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
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

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
		url : "http://api.wunderground.com/api/0374d8d7218313b5/geolookup/q/" + lat + "," + long + ".json",
		dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  $("#currentTemp").text("Current temperature in " + location + " is: " + temp_f);
	  // HTML entity for degree symbol
	  // HTML (.html(text)) method for drawing the symbol
	  // temp_f must change whenever location changes
	};

		
//		xhr.send();



      $("#cover").fadeOut(250);
    });
           }
  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});

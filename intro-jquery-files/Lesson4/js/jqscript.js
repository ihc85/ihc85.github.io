$(function () {
	console.log( $('input[type="text"]').css('background-color'));
	
	toggleStyle = function() {
		var inputFields = $('$('input[type="text"]').css('background-color')');
		
		if( $('input[type="text"]').css('background-color') === 'rgb(255, 0, 0)' ) {
			// Set color to white
			$('input[type="text"]').css('background-color', 'rgb(255, 255, 255)');
		}
		else {
			// Set color to red
			$('input[type="text"]').css('background-color', 'rgb(255, 0, 0)');
		}
		
		$('#ReqAQuoteBtn').click(toggleStyle);
	}
	
	$('.coreValues').append("<li><strong>This is brand new !!</strong></li>");
	
	// Same result as above
	$("<li><strong>This is also great !!</strong></li>").appendTo(".coreValues");
	
	// Adds to beginning of the list
	$('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
	
	var nameVal = $('input[name="nameVal]');
	
	function fillEmpty(){
		if (nameVal.val() == ''){
			nameVal.val( 'John Doe');
		}
		
		$('#ReqAQuoteBtn').click(fillEmpty);
	}
	
	
})
$(window).on("load", function() {
	$.getJSON("/acme/js/acme.json", function(data) {
		console.log(data);
		document.getElementById("name").innerHTML = data.pages.anvils.name;
		document.getElementById("picture").setAttribute("src") = data.pages.anvils.path;
		document.getElementById("price").innerHTML = data.pages.anvils.price;
	});
});
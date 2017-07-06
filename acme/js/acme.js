$(window).on("load", function() {
	var ul = document.getElementsByTagName("ul");
	console.log(ul);
	$.ajax({
		url: "https://ihc85.github.io/acme/js/acme.json",
		dataType: "jsonp",
		success: function (data) {
			console.log(data);
			var firstLink = data.Nav.link1;
			console.log(firstLink);
			document.getElementById("link1").innerHTML = link1;
		}
	});
	var a = document.getElementById("link1");
	a.href = "";
});
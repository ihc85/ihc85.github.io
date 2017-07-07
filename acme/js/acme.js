$(window).on("load", function() {
	$.getJSON("../js/acme.json", function (data) {
		console.log(data);
		var firstLink = data.Nav.link1;
		console.log(firstLink);
		document.getElementById("link1").innerHTML = link1;
	});
//	$.ajax({
//		url: "../js/acme.json",
//		dataType: "json",
//		success: function (data) {
//			console.log(data);
//			var firstLink = data.Nav.link1;
//			console.log(firstLink);
//			document.getElementById("link1").innerHTML = link1;
//		}
//	});
	var a = document.getElementById("link1");
	a.href = "https://ihc85.github.io/";
});
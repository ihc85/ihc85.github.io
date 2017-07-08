$(window).on("load", function() {
	$.getJSON("../js/acme.json", function (data) {
		console.log(data.Nav.link1);
	$("#link1").text(data.Nav.link1);
		console.log(document.getElementById("link1").value);
//		document.getElementById("link1").innerHTML = link1;
	});
	console.log();
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
//	a.href = "https://ihc85.github.io/";
});

$('#nav').on("click", "a", function(evt) {
	var jsonLink = $(this).text();
	console.log(jsonLink);
	var index = $(this).index(jsonLink);
	console.log(index);
	getPage(index);
});
	function getPage(page) {
			if (page = "Home") {
				
			}
}
$(window).on("load", function() {
	$.getJSON("https://ihc85.github.io/acme/js/acme.json", function (data) {
		console.log(data.Nav.link1);
	$("#link1").text(data.Nav.link1);
		$("#link2").text(data.Nav.link2);
		$("#link3").text(data.Nav.link3);
		$("#link4").text(data.Nav.link4);
		$("#link5").text(data.Nav.link5);
		console.log(document.getElementById("link1").value);
//		document.getElementById("link1").innerHTML = link1;
	});
});

$('#nav-bar').on("click", "a", function(evt) {
	window.alert();
	evt.preventDefault();
	var jsonLink = $(this).text();
	console.log(jsonLink);
	var index = $(this).index(jsonLink);
	console.log(index);
	show(index);
});
	function show() {
		/*
			1. Prevent default behavior
			2. Create variable for what's currently shown
			3. If the home section is shown, the variable is equal to "home"
			  - Otherwise, the content section is shown (value "other")
			4. 
		*/
		window.alert();
		localStorage.setItem("pageIndex", arguments[0]);
		var shown;
		if (document.getElementById("homeContent").style.display != "none") {
			shown = "home";
		} else {
			shown = "other";
		}
		sessionStorage.setItem("shown", shown);
		console.log(sessionStorage.getItem("shown"));
		$.getJSON("https://ihc85.github.io/acme/js/acme.json", function (data) {
			console.log(sessionStorage.getItem("shown"));
			window.alert();
			console.log(data);
			if (localStorage.getItem("pageIndex") == -1) {
				if (shown == "other") {
					document.getElementById("productContent").style.display = "none";
					document.getElementById("homeContent").style.display = "flex";
				} else {
					window.alert();
					$('html,body').scrollTop(0);
				}
			} else {
				if	(shown == "home") {
					document.getElementById("productContent").style.display = "flex";
					document.getElementById("homeContent").style.display = "none";
					newPage(page);
				} else if (data.pages[page].name == document.getElementById("name").value) {
					$('html,body').scrollTop(0);
				} else {
					newPage(page);
				}
			}
			function newPage(page) {
				document.getElementById("name").innerHTML = data.pages[page].name;
				document.getElementById("picture").src = data.pages[page].path;
				var lbl = document.createElement("LABEL");
				var txt = document.createTextNode(data.pages[page].manufacturer);
				lbl.appendChild(txt);
				document.getElementById("lbl").appendChild(lbl);
			}
			});
//$.post("https://ihc85.github.io/acme/js/acme.json",)
	}

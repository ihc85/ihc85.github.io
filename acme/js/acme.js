//$(document).ready(function() {
//	getNewData();
//});
//
//function getNewData() {
//	$.ajax({
//		url: "/acme/js/acme.json",
//		dataType: "json",
//		success: function (data) {
//	$("#link1").html(data.Nav.link1);
//		$("#link2").html(data.Nav.link2);
//		$("#link3").html(data.Nav.link3);
//		$("#link4").html(data.Nav.link4);
//		$("#link5").html(data.Nav.link5);
//		console.log(document.getElementById("link1").value);
//		
//		document.getElementById("link1").innerHTML = link1;
	}
	});
}

//$("nav").on("click", "a", function(evt) {
////	console.log(sessionStorage.getItem("data"));
////	evt.preventDefault();
//	var jsonLink = $(this).text();
//	console.log(jsonLink);
//	var index = $(this).index(jsonLink);
//	console.log(index);
////	show();
////	show(index);
//});
//	function show() {
//		/*
//			1. Prevent default behavior
//			2. Create variable for what's currently shown
//			3. If the home section is shown, the variable is equal to "home"
//			  - Otherwise, the content section is shown (value "other")
//			4. 
//		*/
//		window.alert();
////		localStorage.setItem("pageIndex", arguments[0]);
//		sessionStorage.setItem("link", $(this).text());
//		sessionStorage.setItem("pageIndex", arguments[0]);
//		var shown;
//		if (document.getElementById("homeContent").style.display != "none") {
//			shown = "home";
//		} else {
//			shown = "other";
//		}
//		sessionStorage.setItem("shown", shown);
//		console.log(sessionStorage.getItem("shown"));
//		$.getJSON("/acme/js/acme.json", function (data) {
//			console.log(sessionStorage.getItem("shown"));
//			window.alert();
//			sessionStorage.setItem("data", data);
//			console.log(sessionStorage.getItem("data"));
//			if (sessionStorage.getItem("pageIndex") == -1) {
//				if (shown == "other") {
//					document.getElementById("productContent").style.display = "none";
//					document.getElementById("homeContent").style.display = "flex";
//				} else {
//					window.alert();
//					$('html,body').scrollTop(0);
//				}
//			} else {
//				if	(shown == "home") {
//					document.getElementById("productContent").style.display = "flex";
//					document.getElementById("homeContent").style.display = "none";
//					newPage(sessionStorage.getItem("link"));
//				} else if (data[sessionStorage.getItem("link")].name == document.getElementById("name").value) {
//					$('html,body').scrollTop(0);
//				} else {
//					newPage(sessionStorage.getItem("link"));
//				}
//			}
//			function newPage(page) {
//				var acmeData = sessionStorage.getItem("data");
//				console.log(page);
//				console.log(acmeData);
//				$("#picture").setAttribute("src", acmeData[page].path);
//				document.getElementById("name").innerHTML = data.page.name;
//				document.getElementById("picture").src = data.page.path;
//				var lbl = document.createElement("LABEL");
//				var txt = document.createTextNode(data.page.manufacturer);
//				lbl.appendChild(txt);
//				document.getElementById("lbl").appendChild(lbl);
//			}
//			});
////$.post("https://ihc85.github.io/acme/js/acme.json",)
//	}
//
////	window.on("scroll", function() {
////		document.getElementsByTagName("NAV").style.top >=
////	});

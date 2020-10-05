'use strict'

window.addEventListener('load', function() {
	var form = document.querySelector("#filmForm");

	form.addEventListener('submit', function(){
		console.log("enter");
		var title = document.querySelector("#filmName").value;
		if(title.length >= 1){
			localStorage.setItem(title, title);
		}
		
	});

	var formRemove = document.querySelector("#filmRemoveForm");

	formRemove.addEventListener('submit', function(){
		console.log("enter");
		var title = document.querySelector("#filmNameRemove").value;
		if(title.length >= 1){
			localStorage.removeItem(title);
		}
		
	});

	var list = document.querySelector("#idFilmList");
	for (var i in localStorage){

		if(typeof localStorage[i] == 'string'){
			var newFilm = document.createElement("li");
			newFilm.append(localStorage[i]);
			console.log("here");
			list.append(newFilm);
		}
	}


});


'use strict'

window.addEventListener('load', function() {
	var form = document.querySelector("#form");
	var box_dashed= document.querySelector(".dashed");
	box_dashed.style.display = "none";
	
	form.addEventListener('submit', function(){
		var name= document.querySelector("#firstName").value;
		var surname= document.querySelector("#surnames").value;
		var age= parseInt(document.querySelector("#age").value);

		if(name.trim() == null || name.trim().length <=0){
			alert("The name isn't valid!");
			document.querySelector("#error_name").innerHTML = "Enter your name!";
			return false;
		}else{
			document.querySelector("#error_name").style.display= "none";
		}
		if(surname.trim() == null || surname.trim().length <=0){
			alert("The surname isn't valid!");
		}
		if(age == null || age.length <=0 || isNaN(age)){
			alert("The age isn't valid!");
			return false;
		}

		box_dashed.style.display = "block";

		var p_name= document.querySelector("#p_name span");
		var p_surnames= document.querySelector("#p_surnames span");
		var p_age= document.querySelector("#p_age span");

		p_name.innerHTML= name;
		p_age.innerHTML= age;
		p_surnames.innerHTML = surname;


		/*var infoUser= [name, surname, age];

		for( var index in infoUser){
			var information= document.createElement("p");
			information.append(infoUser[index]);
			box_dashed.append(information);
		}*/
	});
});




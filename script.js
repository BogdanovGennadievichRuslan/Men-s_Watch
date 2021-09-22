burgerMenu.onclick = function myFunction() {
	var x = document.getElementById('menu')

	if (x.className === "menu") {
		x.className+=" menu-ON";
	} else{
		x.className = "menu";
	}
}
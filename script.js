burgerMenu.onclick = function myFunction() {
	var x = document.getElementById('menu')

	if (x.className === "menu") {
		x.className+=" menu-ON";
	} else{
		x.className = "menu";
	}
}

new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	}

});
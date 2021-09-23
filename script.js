burgerMenu.onclick = function myFunction() {
	var x = document.getElementById('menu')

	if (x.className === "menu") {
		x.className+=" menu-ON";
	} else{
		x.className = "menu";
	}
}

var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var item = document.querySelectorAll('#gallery .section-advertising-3-product-container .section-advertising-3-product-item');
var i = 0;

btn_prev.onclick = function () {
	item[i].className = 'section-advertising-3-product-item';
	i--;
	if (i < 0) {
		i = item.length - 1;
	}
	item[i].className = 'section-advertising-3-product-item showed';
}
btn_next.onclick = function () {
	item[i].className = 'section-advertising-3-product-item';
	i++;
	if (i >= item.length) {
		i = 0;
	}
	item[i].className = 'section-advertising-3-product-item showed';	
}
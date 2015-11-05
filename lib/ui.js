(function() {
	var aside = document.querySelector("body > aside");

	document.querySelector(".button.sidebar").addEventListener("click", function(event) {
		event.preventDefault();
		event.stopPropagation();
		aside.classList.toggle("open");
	});
})();
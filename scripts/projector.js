let modal = document.querySelector('#modal');
let currentSlide = 0;
let currentTheme;
let currentCaption;

//Called by onclick from themed divs
function selectReel(theme) {
	modal.className = "show-modal"; //Opens the modal (default is "none" to hide it)
	currentTheme = document.getElementsByClassName(theme);
	currentSlide = 0; //Resets slideshow to first slide
	lazyLoad(); //loads image if not already
	currentTheme[0].classList.remove('hide');
	currentTheme[0].classList.add('show-photo');
	 //default is "none" to hide it
	currentCaption = document.getElementsByClassName('caption__' + theme)[0]; //prepends "caption__" so that we can select a specific caption that applies to all slides of this particular theme
	currentCaption.classList.remove('hide');
	currentCaption.classList.add('show-caption'); //default is "none" to hide it
}

function closeModal() {
	modal.className = "hide";
	currentTheme[currentSlide].classList.remove('show-photo');
	currentTheme[currentSlide].classList.add('hide');
	currentCaption.classList.remove('show-caption');
	currentCaption.classList.add('hide');
}

//Onclick from left (n=-1) & right (n=1) arrows trigger function to move to prev or next image.
function switchSlides(n) {
	currentTheme[currentSlide].classList.remove('show-photo');
	currentTheme[currentSlide].classList.add('hide');
	currentSlide += n;
	if (currentSlide >= currentTheme.length) {currentSlide = 0}
	if (currentSlide < 0) {currentSlide = currentTheme.length - 1}
	currentTheme[currentSlide].classList.add('show-photo');
	currentTheme[currentSlide].classList.remove('hide');
	lazyLoad();
}
//I plan to check out methods to incorporate accessibilty for touch screens, especially to make the slides easier to change by adding swipe motion for example. Starting point: https://developers.google.com/web/fundamentals/design-and-ux/input/touch

//ESC key closes modal.
document.onkeyup = function(e) {
	if (e.which == 27) closeModal();
};

//If the current image has the attribute of data-src, make its src attribute = that, and remove data-src. This never reverts, and is presented as an "IF-then", therefore once the image loads, it doesn't reload.
function lazyLoad() {
	if (currentTheme[currentSlide].hasAttribute("data-src")) {
		currentTheme[currentSlide].setAttribute("src", currentTheme[currentSlide].getAttribute("data-src"));
		currentTheme[currentSlide].removeAttribute("data-src");
		console.log("data-src changed to src!")
	}
}
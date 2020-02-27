let modal = document.getElementsByClassName("modal")[0];
let currentSlide = 0;
let currentTheme;
let currentCaption;
let header = document.getElementsByTagName("header")[0];

function selectReel(theme) {
	modal.style.display = "flex";
	currentTheme = document.getElementsByClassName(theme);
	currentSlide = 0; //Resets to first slide
	lazyLoad();
	currentTheme[0].style.display = "block";
	currentCaption = document.getElementsByClassName('caption__' + theme)[0];
	currentCaption.style.display = "inline-block";
}

function closeModal() {
	modal.style.display = "none";
	currentTheme[currentSlide].style.display = "none";
	currentCaption.style.display = "none";
}

function switchSlides(n) {
	currentTheme[currentSlide].style.display = "none";
	currentSlide += n;
	if (currentSlide >= currentTheme.length) {currentSlide = 0}
	if (currentSlide < 0) {currentSlide = currentTheme.length - 1}
	currentTheme[currentSlide].style.display = "block";
	lazyLoad();
}

//ESC key closes modal.
document.onkeyup = function(e) {
	if (e.which == 27) closeModal();
};

//I plan to check out methods to incorporate accessibilty for touch screens. Starting point: https://developers.google.com/web/fundamentals/design-and-ux/input/touch


//EVERYTHING BELOW IS RELATED TO LAZY LOADING
function lazyLoad() {
	//if currentTheme[currentSlide] has the attribute of data-src, make its src attribute = that, and remove data-src.
	if (currentTheme[currentSlide].hasAttribute("data-src")) {
		currentTheme[currentSlide].setAttribute("src", currentTheme[currentSlide].getAttribute("data-src"));
		currentTheme[currentSlide].removeAttribute("data-src");
		console.log("data-src changed to src!")
	}
}
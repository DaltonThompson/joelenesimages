let modal = document.querySelector('#modal');
let reelCovers = document.querySelectorAll('.reel-cover');
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
	
	//the following code is commented out because captions are not ready to be implemented...
	/*currentCaption = document.getElementsByClassName('caption__' + theme)[0]; //prepends "caption__" so that we can select a specific caption that applies to all slides of this particular theme
	currentCaption.classList.remove('hide');
	currentCaption.classList.add('show-caption'); //default is "none" to hide it*/
}

function closeModal() {
	modal.className = "hide";
	currentTheme[currentSlide].classList.remove('show-photo');
	currentTheme[currentSlide].classList.add('hide');
	/*currentCaption.classList.remove('show-caption');
	currentCaption.classList.add('hide');*/
}

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

document.addEventListener("keyup", () => {
	if (event.keyCode === 27) closeModal(); //Esc key
	if (event.keyCode === 37) switchSlides(-1); //left arrow key
	if (event.keyCode === 39) switchSlides(1); //right arrow key
});

document.querySelector('#prev-photo').addEventListener("click", () => {switchSlides(-1)});
document.querySelector('#next-photo').addEventListener("click", () => {switchSlides(1)});
document.querySelector('#close-modal').addEventListener("click", () => {closeModal()});

console.log(reelCovers);
for (reelCover of reelCovers) {
	let theme = reelCover.getAttribute("data-theme");
	reelCover.addEventListener("click", () => {selectReel(theme)});
}

//If the current image has the attribute of data-src, make its src attribute = that, and remove data-src. This never reverts, and is presented as an "IF-then", therefore once the image loads, it doesn't reload.
function lazyLoad() {
	if (currentTheme[currentSlide].hasAttribute("data-src")) {
		currentTheme[currentSlide].setAttribute("src", currentTheme[currentSlide].getAttribute("data-src"));
		currentTheme[currentSlide].removeAttribute("data-src");
	}
}
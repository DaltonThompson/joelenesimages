let modal = document.getElementsByClassName("modal")[0];
let currentSlide = 0;
let currentTheme;
let currentCaption;
let header = document.getElementsByTagName("header")[0];

function selectReel(theme) {
	modal.style.display = "flex";
	currentTheme = document.getElementsByClassName(theme);
	currentSlide = 0; //I wanted to make this find where the now-displayed slide is within the array of document.getElementsByClassName('slide')[ ??? ]. Instead, I decided to only play through the selected theme.
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
}
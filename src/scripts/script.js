//Typing animation
var subHeading = document.getElementById("subHeading");
var subHeadingSpan = document.getElementById("typedText");
var subHeadingString = "I am a Junior Full-stack Web Developer";

var letter = 0;


//Type string out one by one for typwriter effect
function typeText() {
  if (letter < subHeadingString.length) {
    subHeading.innerHTML += subHeadingString.charAt(letter);
    letter++;
    setTimeout(typeText, 50);
  }
}

//scroll to projects when button is pressed.
function scrollToTop() {
  var projScroll = document.getElementById("finalSectionDiv");
  var res = projScroll.getBoundingClientRect().top;
  window.scrollTo({ top: res, behavior: "smooth" });
}



typeText();

//eventListener for button press (onClick doesnt want to work)
document.getElementById("buttonScroll").addEventListener("click", scrollToTop);

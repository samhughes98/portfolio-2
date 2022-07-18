//scripts for basic functionality, mainly on homepage 

//eventListener for button press (onClick doesnt want to work)
document.getElementById("buttonScroll").addEventListener("click", scrollToTop);

//event listener for caption animation to play on big image
var mainImg = document.getElementById("img1");
mainImg.addEventListener('mouseover', () => {
    var caption = document.getElementById("imgCaption");

    caption.style.display = 'block';

    mainImg.addEventListener('mouseleave', () => {
      caption.style.display = 'none';
    })
})

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


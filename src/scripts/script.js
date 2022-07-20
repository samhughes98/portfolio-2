//scripts for basic functionality, mainly on homepage 

//eventListener for button press (onClick doesnt want to work)
document.getElementById("buttonScroll").addEventListener("click", scrollToTop);

//event listener for caption animation to play on big image &&
//Grabbing all images from project section on index page
var mainImg = document.getElementById("img1");
var projImg2 = document.getElementById("img2");
var projImg3 = document.getElementById("img3");
var projImg4 = document.getElementById("img4");
var projImg5 = document.getElementById("img5");
var projImg6 = document.getElementById("img6");

//pushing to array
const imgArr = [mainImg, projImg2, projImg3, projImg4, projImg5, projImg6]

//event listener for each of imgArray, to check for mouseover on any of the elements
imgArr.forEach(function(e) {
  e.addEventListener('mouseover', () => {
    var caption = document.getElementById("imgCaption");
    var caption2 = document.getElementById("imgCaption2");
    var caption3 = document.getElementById("imgCaption3");
    var caption4 = document.getElementById("imgCaption4");
    var caption5 = document.getElementById("imgCaption5");
    var caption6 = document.getElementById("imgCaption6");

    //pushing all captions of images into array
    var captionArray = [caption, caption2, caption3, caption4, caption5, caption6];

    //getting index of where mouseover occured
    var index = imgArr.indexOf(e);


    var res = captionArray[index];
    console.log(res);

    //setting specific element to block depending on which was mousedOver
    res.style.display = 'block';

    e.addEventListener('mouseleave', () => {
      //cancel display when mouse leaves div
      res.style.display = 'none';
    })
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


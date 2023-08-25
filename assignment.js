


// Auto carousel- News////////////
const auto = true; // Auto scroll
const intervalTime = 5000;
let sliderInterval;


if (auto) {
  sliderInterval = setInterval(nextCarousel, intervalTime);
};

carousel.addEventListener('mouseover', (stopInterval) => {
  clearInterval(sliderInterval);
});

carousel.addEventListener('mouseleave', (startInterval) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});


//for mobile events
carousel.addEventListener('touchstart', (stopIntervalT) => {
  clearInterval(sliderInterval);
});
carousel.addEventListener('touchend', (startIntervalT) => {
  if (auto) {
    sliderInterval = setInterval(nextCarousel, intervalTime);
  }
});

//Debounce
var previousCall;
window.addEventListener('resize', () => {
  if (previousCall >= 0) {
    clearTimeout(previousCall);
  }
  previousCall = setTimeout(() => {
    carousel.scrollBy(-300, 0);
  }, 200);
});

var list = [];

if (list.length == 0) {
  $(".list-group").visible = false;
}



// IMAGE GALLERY  //

const slides = document.querySelectorAll(".slide");


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});



let maxSlide = slides.length - 1;



  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

////SEARCH BAR////

function search_website() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('topnav');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  
}

}


///member login //////

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "password123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
///create new div element///
let divElement = document.createElement('div');
divElement=classList.add()

let textNode = document.createTextNode('This is newly created');

divElement.appendChild(textNode);
let containerDiv = document.querySelector("checkbox-terms");
containerDiv.appendChild(divElement);


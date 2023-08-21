

// Auto carousel
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

var moduleA = angular.module("ModuleA", []);

moduleA.controller("MsgController", function ($scope) {
  $scope.Message = "測試一下";
  $scope.User = "World";
  $scope.response = { msgList: list };
  $scope.newMsg = function () {
    //console.log($("#txtNewMsg").val());
    list.push($("#txtNewMsg").val());
    $("#txtNewMsg").val("");
    //console.log(list);
  };

  $scope.deleteMsg = function (index) {
    list.splice(index, 1);
  };
});

moduleA.controller("UserController", function ($scope) { });


// IMAGE GALLERY  //

const slides = document.querySelectorAll(".slide");


slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const nextSlide = document.querySelector(".btn-next");


let curSlide = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide -;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});








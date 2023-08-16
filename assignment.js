

const carousel = document.querySelector('.img-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let carsouselImages = document.querySelectorAll('.img-carousel div');

/


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

moduleA.controller("MsgController", function($scope) {
  $scope.Message = "測試一下";
  $scope.User = "World";
  $scope.response = { msgList: list };
  $scope.newMsg = function() {
    //console.log($("#txtNewMsg").val());
    list.push($("#txtNewMsg").val());
    $("#txtNewMsg").val("");
    //console.log(list);
  };

  $scope.deleteMsg = function(index) {
    list.splice(index, 1);
  };
});

moduleA.controller("UserController", function($scope) {});

 

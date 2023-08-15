
fadeIn();

          window.onload=function() {
              var displayArea = document.getElementsByClassName("display-area");
              var btn = document.getElementsByClassName("submit-btn");
              btn.onclick = function() {
                  var comment = document.getElementsByClassName("message").value;
                  displayArea.appendChild(comment);
              };
          }  
          function hideIconBar(){
            var iconBar = document.getElementById("iconBar");
            var navigation = document.getElementById("navigation");
            iconBar.setAttribute("style", "display:none;");
            navigation.classList.remove("hide");
        }
        
        function showIconBar(){
            var iconBar = document.getElementById("iconBar");
            var navigation = document.getElementById("navigation");
            iconBar.setAttribute("style", "display:block;");
            navigation.classList.add("hide");
        }
        
        //Comment
        function showComment(){
            var commentArea = document.getElementById("comment-area");
            commentArea.classList.remove("hide");
        }
        
        //Reply
        function showReply(){
            var replyArea = document.getElementById("reply-area");
            replyArea.classList.remove("hide");
        }

const carousel = document.querySelector('.img-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let carsouselImages = document.querySelectorAll('.img-carousel div');

//Next Carousel
const nextCarousel = () => {
    if(carsouselImages[carsouselImages.length - 1]) {
      carousel.scrollTo(0, 0); 
    } 
      carousel.scrollBy(400, 0);
};

nextBtn.addEventListener('click', e => {
  nextCarousel(); 
});

//Prev Carousel
const prevCarousel = () => {
   if(carsouselImages[0]) {
    carousel.scrollTo(4800,0);
   }
    carousel.scrollBy(-400, 0); 
};

prevBtn.addEventListener('click', e => {
   prevCarousel(); 
});



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

 

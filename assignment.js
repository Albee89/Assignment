const carousel = document.querySelector('.img-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let carsouselImages = document.querySelectorAll('.img-carousel div');


//Next Carousel
const nextCarousel = () => {
    if(carsouselImages[carsouselImages.length - 1]) {
      carousel.scrollTo(0, 0); 
    } 
      carousel.scrollBy(300, 0);
};

nextBtn.addEventListener('click', e => {
  nextCarousel(); 
});

//Prev Carousel
const prevCarousel = () => {
   if(carsouselImages[0]) {
    carousel.scrollTo(4800,0);
   }
    carousel.scrollBy(-300, 0); 
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

var properties = [
	'name',
	'wins',
	'draws',
	'losses',
	'total',
];

$.each( properties, function( i, val ) {
	
	var orderClass = '';

	$("#" + val).click(function(e){
		e.preventDefault();
		$('.filter__link.filter__link--active').not(this).removeClass('filter__link--active');
  		$(this).toggleClass('filter__link--active');
   		$('.filter__link').removeClass('asc desc');

   		if(orderClass == 'desc' || orderClass == '') {
    			$(this).addClass('asc');
    			orderClass = 'asc';
       	} else {
       		$(this).addClass('desc');
       		orderClass = 'desc';
       	}

		var parent = $(this).closest('.header__item');
    		var index = $(".header__item").index(parent);
		var $table = $('.table-content');
		var rows = $table.find('.table-row').get();
		var isSelected = $(this).hasClass('filter__link--active');
		var isNumber = $(this).hasClass('filter__link--number');
			
		rows.sort(function(a, b){

			var x = $(a).find('.table-data').eq(index).text();
    			var y = $(b).find('.table-data').eq(index).text();
				
			if(isNumber == true) {
    					
				if(isSelected) {
					return x - y;
				} else {
					return y - x;
				}

			} else {
			
				if(isSelected) {		
					if(x < y) return -1;
					if(x > y) return 1;
					return 0;
				} else {
					if(x > y) return -1;
					if(x < y) return 1;
					return 0;
				}
			}
    		});

		$.each(rows, function(index,row) {
			$table.append(row);
		});

		return false;
	});

});
object.onscroll = function(){myScript};
object.addEventListener("scroll", myScript);




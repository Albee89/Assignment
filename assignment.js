
///member login //////

var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Formget" && password == "password123") {
    alert("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  }
  else {
    attempt--;// Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}

///////NEWS CAROUSEL////

const carousel = document.querySelector('.img-carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let carsouselImages = document.querySelectorAll('.img-carousel div');

//Next Carousel
const nextCarousel = () => {
  if (carsouselImages[carsouselImages.length - 1]) {
    carousel.scrollTo(0, 0);
  }
  carousel.scrollBy(300, 0);
};

nextBtn.addEventListener('click', e => {
  nextCarousel();
});

//Prev Carousel
const prevCarousel = () => {
  if (carsouselImages[0]) {
    carousel.scrollTo(4800, 0);
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
// Contact Us ////////////

const contact = document.createElement("p");
const node = document.createTextNode("Questions? Compliments? Feedback? Chat to our team today!");
contact.appendChild(node);

const element1 = document.getElementById("contact_us");
const child1 = document.getElementById("p1");
element1.insertBefore(contact, child1);

contact.innerHTML = `<form method="post">
<input type="text" title="firstname" placeholder="Enter your first name" required>
<input type="text" title="lastname" placeholder="Enter your last name" required>
<input type="email" title="email" placeholder="Enter your email" required><br>
<textarea rows="10" cols="35" placeholder="Enter your message:" required></textarea>
<button>Send</button><br>
<div class="checkbox-terms"></div>

<input type="checkbox" href="#pbutton" id="myPrivacy">Privacy!
<input type="checkbox" href="#tsbutton">T's and
C's

</form>`



//////////////EVENTS TABLE////////

let games = [
  { Date: "Saturday 1st", Time: "7:00pm", Game: "ALL-DAY PREMIERE: Sunshine Jets vs Leo Suns" },
  { Date: "Friday 6th", Time: "5:00pm", Game: "Sunshine Jets vs Carseldine Corvettes" },
  { Date: "Saturday 8th", Time: "6:00pm", Game: "ALL-DAY PREMIERE: Sunshine Jets vs DaVincis" },
  { Date: "Friday 14th", Time: "5:00pm", Game: "Sunshine Jets vs Ashgrove Turbos" },
  { Date: "Saturday 15th", Time: "7:00pm", Game: "Sunshine Jets vs Leo Suns" },
  { Date: "Sunday 16th", Time: "4:00pm", Game: "Sunshine Jets vs North Gympie" },

];


function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(games[0]);


generateTable(table, games);
generateTableHead(table, data);





///////SEARCH BAR /////////

function search_website() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('topnav');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }

  }
}

//////RECENT SCORES///

const scores = document.createElement("table");
const node2 = document.createTextNode("Questions?");
contact.appendChild(node);

const element2 = document.getElementById("recent-scores");
const child2 = document.getElementById("h2");
element2.insertBefore(scores, child2);


scores.innerHTML = `<div class="Scores" id="recent-scores">
                                <div class="table-header">
                                    <div class="header__item">Month</div>
                                    <div class="header__item">Sunshine
                                            Jets
                                            vs SunStars</div>
                                    <div class="header__item">Sunshine
                                            Jets
                                            vs Nambour</div>
                                    <div class="header__item">Sunshine
                                            Jets vs Albion Dragons</div>
                                    <div class="header__item">Sunshine
                                            Jets
                                            vs South-East Eagles</div>
                                </div>
                
                                <div class="table-content" id="scores">
                                    <div class="table-row">
                                        <div class="table-data">APRIL</div>
                                        <div class="table-data">2:1</div>
                                        <div class="table-data">1:3</div>
                                        <div class="table-data">3:2</div>
                                        <div class="table-data">1:2</div>
                                    </div>
                                    <div class="table-row">
                                        <div class="table-data">MAY</div>
                                        <div class="table-data">1:2</div>
                                        <div class="table-data">1:2</div>
                                        <div class="table-data">2:2</div>
                                        <div class="table-data">2:1</div>
                                    </div>
                
                                    <div class="table-row">
                                        <div class="table-data">JUNE</div>
                                        <div class="table-data">1:2</div>
                                        <div class="table-data">2:1</div>
                                        <div class="table-data">3:1</div>
                                        <div class="table-data">1:2</div>
                                    </div>
                
                                    <div class="table-row">
                                        <div class="table-data">JULY</div>
                                        <div class="table-data">1:2</div>
                                        <div class="table-data">2:1</div>
                                        <div class="table-data">3:1</div>
                                        <div class="table-data">1:2</div>
                                    </div>
                
                                    <div class="table-row">
                                        <div class="table-data">AUGUST</div>
                                        <div class="table-data">1:2</div>
                                        <div class="table-data">2:1</div>
                                        <div class="table-data">3:1</div>
                                        <div class="table-data">1:2</div>
                
                                        </table>
                                    </div>`


////////////Image Gallery ///////////

function myFunction(imgs) {

  var expandImg = document.getElementById("expandedImg");

  var imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}

////////BUTTON T&CS, PRIVACY///////////
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

///BUTTON REVEAL MEMBER LOGIN////////

function myfunction() {
  if (document.getElementById("displaytable").style.display === "none")
    document.getElementById("displaytable").style.display = "block";
  else
    document.getElementById("displaytable").style.display = "none";
}

////CANVAS DRAWING////
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


function sun() {
  ctx.strokeStyle = 'Yellow';
  ctx.fillStyle = 'rgba(255,255,0,0.1)';
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
sun();

////SCROLL FUNCTION ON 'ABOUT ME'/////////

$(document).ready(function () {
  $("#para").scroll(function () {
    $("#para").css("color", "lightblue");
    $("#para").css("background", "white");
  });
});

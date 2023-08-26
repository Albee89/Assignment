

///member login //////

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
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
<button type="submit">Send</button><br>
<div class="checkbox-terms"></div>
<input type="checkbox" href="myPrivacy" id="myPrivacy">Privacy, yeah!
<input type="checkbox" href="myTerms" id="myTerms" style="font-size:8px">T's and
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


//BOOK TICKETS BUTTON 

//IMAGE CAROUSELS




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

//////SCORES///

const scores = document.createElement("table");
const node2 = document.createTextNode("Questions?");
contact.appendChild(node);

const element2 = document.getElementById("recent-scores");
const child2 = document.getElementById("h2");
element2.insertBefore(scores, child2);


scores.innerHTML = `div class="table-header">
                
                    <div class="header__item">Sunshine
                            Jets vs SunStars</div>
                    <div class="header__item"><>Sunshine
                            Jets</div>
                            vs Nambour</a></div>
                    <div class="header__item>Sunshine
                            Jets vs Albion Dragons</a></div>
                    <div class="header__item">Sunshine
                            Jets vs South-East Eagles</a></div>
                </div>

                <div class="table-content" id="scores">
                    <div class="table-row">
                        <div class="table-data">APRIL</div>
                        <div class="table-data">2:1</div>
                        <div class="table-data">1:3</div>
        <div class="container">

            <div class="Scores" id="recent-scores">
                <h2>Recent Scores</h2>
                <div class="table-header">
                    <div class>Month</a>
                    </div>
                    <div class="header__item">Sunshine
                            Jets
                            vs SunStars/div>
                    <div class="header__item">Sunshine
                            Jets
                            vs Nambour</div>
                    <div class="header__item"><Sunshine
                            Jets vs Albion Dragons</a></div>
                    <div class="header__item">Sunshine
                            Jets
                            vs South-East Eagles</div>
                </div>

                <div class="table-content" id="scores">
                    <div class="table-row">
                        <div class="table-data">APRIL</div>
                        <div class="table-data">2:1</div>
                        <div class="table-data">1:3</div>
                        <div class="container">

                            <div class="Scores" id="recent-scores">
                                <h2>Recent Scores</h2>
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

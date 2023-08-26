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

// Contact Us ////////////

const contact = document.createElement("p");
const node = document.createTextNode("Questions? Compliments? Feedback? Chat to our team today!");
contact.appendChild(node);

const element = document.getElementById("contact_us");
const child = document.getElementById("p1");
element.insertBefore(contact, child);

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

///Events/////

let events = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
];





function generateTableHead(table) {
  let thead = table.createThead();
  let row = thead.insertRow();
  }

  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);

    
    
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
let table = document.querySelector("event1");
let data = Object.keys(events[0]);
generateTable(table, events);
generateTableHead(table,data);










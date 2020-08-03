let infoDiv = document.getElementById('info')
fetch("http://localhost:3000/climber/18")
.then(res => res.json())
.then(info => {infoDiv.innerHTML += `<p> ${info.name} -- ${info.homeGym} </p>`})

let sendButton = document.getElementById('send')

sendButton.addEventListener("click", evt => {
  fetch('http://localhost:3000/climber/18')
  .then(res => res.json())
  .then(info => {
    infoDiv.innerHTML = `<h3>Here's some climber info</h3>
    <img src="${info.photourl}" alt="climber" />`
  });
})


function validateForm() {
  var x = document.forms["climberEdit"]["first"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
  var x = document.forms["climberEdit"]["last"].value;
  if (x == "") {
    alert("Last Name must be filled out");
    return false;
  }
  var x = document.forms["climberEdit"]["homeGym"].value;
  if (x == "") {
    alert("Home Gym must be filled out");
    return false;
  }
  var x = document.forms["climberEdit"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}
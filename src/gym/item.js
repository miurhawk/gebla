let infoDiv = document.getElementById('info')
let brandDiv = document.getElementById('brand')
let sizeDiv = document.getElementById('size')
let colorDiv = document.getElementById('color')
let barcodeDiv = document.getElementById('barcode')
let descriptionDiv = document.getElementById('description')
let imagesDiv = document.getElementById('images')
let barcode = "801216010827"
// make this barcode be selected by url parameter
fetch("http://localhost:3000/pos/item?barcode=801216010827")
.then(res => res.json())
.then(info => {
  infoDiv.innerHTML += `<p> ${info.Label} -- ${info.Manufacturer} </p>`
  brandDiv.innerHTML += `${info.Brand}`
  sizeDiv.innerHTML += `${info.Size}`
  colorDiv.innerHTML += `${info.Color}`
  barcodeDiv.innerHTML += `${info.Barcode}`
  descriptionDiv.innerHTML += `${info.Description}`
  for i:=0; i<info.Images.length(); i++ {
    imagesDiv.innerHTML += `<img src="${info.Images[i]}" alt="image" />`
  }
})

let sendButton = document.getElementById('send')

sendButton.addEventListener("click", evt => {
  fetch('http://localhost:3000/pos/stock') // this needs to be a put request  &price=11100&ccy=USD&item=556&gym=2
  .then(res => res.json())
  .then(info => {
    infoDiv.innerHTML = `<h3>Here's some climber info</h3>
    <img src="${info.photourl}" alt="climber" />`
  });
})


function validateForm() {
  var x = document.forms["stockItem"]["price"].value;
  if (x == "") {
    alert("Price must be filled out");
    return false;
  }
  var x = document.forms["stockItem"]["ccy"].value;
  if (x == "") {
    alert("Currency must be filled out");
    return false;
  }
  var x = document.forms["stockItem"]["item"].value;
  if (x == "") {
    alert("No item ID filled out");
    return false;
  }
  var x = document.forms["stockItem"]["gym"].value;
  if (x == "") {
    alert("Must be connected to a gym");
    return false;
  }
}

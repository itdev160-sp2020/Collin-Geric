//welcome 
var user = 'Collin'; 
var salutation = "Hello, "; 
var greeting = salutation + user + "! Here are the latest reviews of the Nintendo Switch"; 
var greetingEl = document.getElementById('greeting'); 

greetingEl.textContent = greeting; 

var price = 20; 
var studentPrice = price - (price * .10); 
var pricedec = "The Price is: " + "$" + price; 
var studentPricedec = "The price for students is: " + "$" + studentPrice; 

var studentpriceEl = document.getElementById("studentPrice");
var priceEl = document.getElementById('price'); 
var pricedecEl = document.getElementById("pricedec"); 
var studentPricedecEl = document.getElementById('studentPricedec')


pricedecEl.textContent = pricedec; 
studentPricedecEl.textContent = studentPricedec; 

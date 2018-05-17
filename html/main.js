/**
 *
 */
document.getElementById("taxbutton").onclick = function(){
var price = document.getElementById("price").value;
var taxrate = document.getElementById("taxrate").value;
var taxAmount = parseInt(price, 10) * parseInt(taxrate, 10) / 100;
var taxIncluded = parseInt(price,10) + parseInt(taxAmount);
document.getElementById("tax").value = taxAmount;
document.getElementById("taxprice").value = taxIncluded;
};
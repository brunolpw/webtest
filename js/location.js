// JavaScript Document
var area = document.getElementById("geoarea");
 
function showPosition() {
	if(navigator.geolocation){ navigator.geolocation.getCurrentPosition(getPosition); }
	else{ area.innerHTML = "Infelizmente este browser não suporta o recurso de geolocalização."; }
}
 
function getPosition(posicao) {
	area.innerHTML = "Latitude: " + posicao.coords.latitude + "<br /> Longitude: " + posicao.coords.longitude;
}
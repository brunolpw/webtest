// JavaScript Document
var area = document.getElementById("geoarea");
 
function ExibirLocalizacao() {
	if(navigator.geolocation){ navigator.geolocation.getCurrentPosition(ObterPosicao); }
	else{ area.innerHTML = "Infelizmente este browser não suporta o recurso de geolocalização."; }
}
 
function ObterPosicao(posicao) {
	area.innerHTML = "Latitude: " + posicao.coords.latitude + "<br /> Longitude: " + posicao.coords.longitude;
}
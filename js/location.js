// JavaScript Document
var area = document.getElementById("geoarea");
var btnHere = document.getElementById( "btn-here" );
var lat, lon;

btnHere.addEventListener("click",showPosition());
 
function showPosition() {
	alert("procurando...");
	//if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getPosition);
		area.innerHTML = "Latitude: " + lat + "<br> Longitude: " + lon;
		alert("Latitude: " + lat + "<br> Longitude: " + lon);
	//}
	//else{ area.innerHTML = "Infelizmente este browser não suporta o recurso de geolocalização."; }
}

function getPosition(posicao) {
	lat = posicao.coords.latitude, lon = posicao.coords.longitude;
}

function show(){
	area.innerHTML = "Latitude: " + lat + "<br> Longitude: " + lon;
}

function geoError( err ) {
	switch( err.code ){
		case 1:
	 		x.innerHTML="Geolocalização rejeitada pelo usuário.";
			break;
		case 2:
			x.innerHTML="Localização indisponível.";
			break;
		case 3:
		x.innerHTML="A requisição expirou.";
		break;
		case 0:
		x.innerHTML="Algum erro desconhecido aconteceu.";
		break;
	}	
};
// JavaScript Document
var area = document.getElementById("geoarea");
var btnHere = document.getElementById( "btn-here" );

btnHere.addEventListener("click",showPosition());
 
function showPosition() {
	alert("procurando...");
	if(navigator.geolocation){ navigator.geolocation.getCurrentPosition(getPosition); }
	else{ area.innerHTML = "Infelizmente este browser não suporta o recurso de geolocalização."; }
}

function getPosition(posicao) {
	area.innerHTML = "Latitude: " + posicao.coords.latitude + "<br /> Longitude: " + posicao.coords.longitude;
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
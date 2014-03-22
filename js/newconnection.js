// JavaScript Document

function geoSuccess( pos ) {
	// armazena as coordenadas de latitude e longitude
	var lat = pos.coords.latitude, lng = pos.coords.longitude;
};

function geoError( err ) {
	switch( err.code ) {
		case 1: x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."; break;
		case 2: x.innerHTML="Localização indisponível."; break; x.innerHTML="Localização indisponível."; break;
		case 3: x.innerHTML="A requisição expirou."; break;
		case 0: x.innerHTML="Algum erro desconhecido aconteceu."; break;
	}	
};

navigator.geolocation.getCurrentPosition( geoSuccess );
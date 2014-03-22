// JavaScript Document
var x=document.getElementById("demo");
var map;
var markers = [];

function initialize() {
	var latlng = new google.maps.LatLng(42.363400, -71.098465);
	 
	var options = {
		zoom: 4,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	 
	map = new google.maps.Map(document.getElementById("mapholder"), options);
}
 
initialize();

function carregarPontos() {
			
		var latlngbounds = new google.maps.LatLngBounds();
		 
		 var marker = new google.maps.Marker({
			position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			title: "Lat: " + position.coords.latitude + "\nLon: " + position.coords.longitude,
			map: map,
		});
			  
		markers.push(marker);
		latlngbounds.extend(marker.position);
		 
		var markerCluster = new MarkerClusterer(map, markers);
		map.fitBounds(latlngbounds);
};
 
carregarPontos();

// Pega a geolocalização.
function getLocation() {
	if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(carregarPontos); }
	else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
}

// Mostra a posição geografica.
// function showPosition(position) { x.innerHTML="Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; }

// Pega os possiveis erros.
function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED: x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."; break;
		case error.POSITION_UNAVAILABLE: x.innerHTML="Localização indisponível."; break;
		case error.TIMEOUT: x.innerHTML="A requisição expirou."; break;
		case error.UNKNOWN_ERROR: x.innerHTML="Algum erro desconhecido aconteceu."; break;
	}
}

function showpos(position){
  lat=position.coords.latitude
  lon=position.coords.longitude
  alert('Your position: '+lat+','+lon)
}
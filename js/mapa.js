var map;
var markers = [];
 
function initialize() {
    var latlng = new google.maps.LatLng(42.363400, -71.098465);
 
    var options = {
        zoom: 4,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
 
initialize();

function carregarPontos() {
 
    $.getJSON('data/output.json', function(pontos) {
    
    var latlngbounds = new google.maps.LatLngBounds();
 
        $.each(pontos, function(index, ponto) {
 
            var marker = new google.maps.Marker({
    		position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
		title: "Lat: " + ponto.Latitude + "\nLon: " + ponto.Longitude + "\nInfo: " + ponto.Info,
    		map: map,
   		icon: 'img/marcador.png'
	    });
      
	   markers.push(marker);
	   latlngbounds.extend(marker.position);
        });
 
        var markerCluster = new MarkerClusterer(map, markers);
	map.fitBounds(latlngbounds);
    }); 
};
 
carregarPontos();

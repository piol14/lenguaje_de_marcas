window.onload = function() {
    var ausias = new google.maps.LatLng(39.44809594662387, -0.36840294639496934);
    var mapOptions = {
    center: ausias,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.44809594662387, -0.36840294639496934),
    map: map,
    title: 'CIPFP Ausias March',
    icon: 'iconos/green.png'
    });
    var infowindow = new google.maps.InfoWindow({
    content:'<h3>CIP FP Ausiàs March de Valencia</h3><p>Adreça: Carrer Angel Villena , 0, 46013 Valencia.</p><p>Telèfon: 961 20 59 30 </p> <img src="Ausias.png" alt="CIPFP Ausias March"  style="width: 200px;">'
    });
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });
   
    var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(39.44809594662387, -0.36840294639496934),
    map: map, 
});
 
    var infowindow1 = new google.maps.InfoWindow({
    content: 'Valencia<br/><a href="http://es.wikipedia.org/wiki/Valencia" target="_blank">Wikipedia</a>'
    });
    google.maps.event.addListener(marker1, 'click', function() {
    
    infowindow1.open(map, marker1);
    });
    }
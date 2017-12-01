$(document).ready(function () {
    'use strict';

    function initialize() {
        $(".google-map").each(function (index) {

            //Taking data attribute from map wrapper
            var mapLat = parseFloat($(this).data('lat'));
            var mapLng = parseFloat($(this).data('lng'));
            var mapZoom = parseInt($(this).data('zoom'));

            //Processing wrapper data attribute to coordinate
            var mapOptions = {
                center: {
                    lat: mapLat,
                    lng: mapLng
                },
                zoom: mapZoom,
                scrollwheel: false,
                styles: [{
                    featureType: "all",
                    elementType: "all",
                    "stylers": [{
                        "saturation": -100
                    }]
                }]
            };

            //Initiating map
            var map = new google.maps.Map(this, mapOptions);

            //Map Marker
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(mapLat, mapLng),
                map: map,
                icon: 'images/contact/map-marker.png'
            });
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});

'use strict';
var map;
var geocoder = new google.maps.Geocoder();
var markers = [];
var iterator = 0;
var berlin = new google.maps.LatLng(52.520816, 13.410186),
    stockholm = new google.maps.LatLng(59.32522, 18.07002);
var neighborhoods = [new google.maps.LatLng(52.511467, 13.447179), new google.maps.LatLng(52.549061, 13.422975), new google.maps.LatLng(52.497622, 13.396110), new google.maps.LatLng(52.517683, 13.394393), new google.maps.LatLng(52.530843, 13.382721), new google.maps.LatLng(52.514549, 13.350105), new google.maps.LatLng(52.534394, 13.340492), ];

function initialize() {
    var mapOptions = {
        zoom: 12,
        center: berlin
    };
    var el = document.getElementById('map-1'),
        doc_height = window.innerHeight - 10;
    el.style.height = doc_height + 'px';
    map = new google.maps.Map(el, mapOptions);
    for (var i = 0; i < neighborhoods.length; i++) {
        setTimeout(function () {
            addMarker();
        }, i * 200 + 200);
    }
    new google.maps.Marker({
        map: map,
        position: stockholm,
        draggable: true
    });
}

function addMarker() {
    markers.push(new google.maps.Marker({
        position: neighborhoods[iterator],
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
    }));
    iterator++;
}
google.maps.event.addDomListener(window, 'load', initialize);
document.querySelector("#go-sthlm").addEventListener("click", function (ev) {
    ev.preventDefault();
    map.panTo(stockholm);
});

document.querySelector("#go-bln").addEventListener("click", function (ev) {
    ev.preventDefault();
    map.panTo(berlin);
});
document.querySelector("#map-unzoom").addEventListener("click", function (ev) {
    ev.preventDefault();
    map.setZoom(map.getZoom() - 1);
});

document.querySelector("#map-resetzoom").addEventListener("click", function (ev) {
    ev.preventDefault();
    map.setZoom(12);
});

document.querySelector("#map-zoom").addEventListener("click", function (ev) {
    ev.preventDefault();
    map.setZoom(map.getZoom() + 1);
});

document.querySelector("#address-search").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var $inp = document.querySelector("#address-search .form-control"),
        address = $inp.value;
    if (address.length != 0) {
        geocoder.geocode({
            'address': address
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    draggable: true
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
});
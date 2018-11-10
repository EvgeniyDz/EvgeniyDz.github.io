function initMap() {

    var locations = [
        {            
            cord: {lat: 55.716424, lng: 37.576210},
            markerPos: {lat: 55.716424, lng: 37.576210},            
        },      
    ]

    var mapStyles = [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "40"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ];

    var myOptions = {
        zoom: 16,
        center: {lat: 55.716424, lng: 37.576210},        
        disableDefaultUI: true,
        // styles: mapStyles
    }   

    var mapBig = document.getElementById('gmap'); 
    var map = new google.maps.Map(mapBig, myOptions);

    

    function addMarkers(){ 
        for (var i = 0; i <= locations.length - 1; i++){
            var marker = new google.maps.Marker({
                position: locations[i].markerPos,
                map: map,
                id: i,
                icon: {
                    url: '../images/marker.png',                    
                },
            });
        }
    }
    addMarkers();

}
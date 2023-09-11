// Initialize the map
function initGoogleMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("googleRouteDisplay"), {
        zoom: 7,
        center: { lat: 49.403596150413094, lng: 8.663616728347026 }, //49.403596150413094, 8.663616728347026
    });

    directionsRenderer.setMap(map);

    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    document.getElementById("search-input-start").addEventListener("change", onChangeHandler);
    document.getElementById("search-input-end").addEventListener("change", onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
    .route({
    origin: {
        query: document.getElementById("search-input-start").value,
    },
    destination: {
        query: document.getElementById("search-input-end").value,
    },
    travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
    directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

window.initGoogleMap = initGoogleMap;
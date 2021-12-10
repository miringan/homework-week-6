// Global Vars
var cityNameSubmissionEl = $('#cityName');
var searchSubmitEl = $

// Event listener functions:
cityNameSubmissionEl.on('submit',fetchGeoData(cityNameSubmissionEl.value));

// Fetch data functions:

function fetchGeoData (city) {

    var url = "";

    fetch(url) 
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            fetchOneCall(lat, lon);
        })

}

function fetchOneCall (lat, lon) {

    var url = "";

    fetch(url) 
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            // Render to page function

        })

}

// Print/Render functions:


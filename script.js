// Global Vars

var searchButtonEl = $('#search-button');
var cityNameSubmissionEl = $('#cityName');
// var searchSubmitEl = $

// Event listener functions:
searchButtonEl.on('click',geoData);

// Fetch data functions:

function geoData (event) {

    
    // API Key: abd3df57a4ab15ebd0330fb0c538c405
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityNameSubmissionEl.val() + "&limit=1&appid=abd3df57a4ab15ebd0330fb0c538c405";

    //console.log(cityNameSubmissionEl.val());

    fetch(url) 
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            fetchOneCall(data[0].lat, data[0].lon);
        })

}

function fetchOneCall (lat, lon) {

    // API Key: abd3df57a4ab15ebd0330fb0c538c405
    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=abd3df57a4ab15ebd0330fb0c538c405";
    
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

// Prints Today's Weather
function renderCurrentWeather () {

    // Print location, today's date, and an icon that shows the type of weather

}

// Prints the weather for the next few days
function renderFiveDayForecast () {

}

// Adds the previous searches as buttons below the search button
function previousSearchButtons () {

}
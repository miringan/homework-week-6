// Global Vars

var searchButtonEl = $('#search-button');
var cityNameSubmissionEl = $('#cityName');
var todaysWeatherEl = $('#todaysWeather');
var fiveDayForecastEl = $('#fiveDayForecast');
var searchHistoryEl = $('#searchHistory');

// Event listener functions:

// Initiates search for city in the input box
searchButtonEl.on('click', function(){
    todaysWeatherEl.html('');
    fiveDayForecastEl.html('');
    geoData(cityNameSubmissionEl.val())
    previousSearchButtons();
})

// Regrabs weather data for previously searched cities
searchHistoryEl.on('click',function(event){
    todaysWeatherEl.html('');
    fiveDayForecastEl.html('');
    var previousSearch = event.target.innerText;
    geoData(previousSearch);
})

// Fetch data functions:

function geoData (city) {

    
    // API Key: abd3df57a4ab15ebd0330fb0c538c405
    var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=abd3df57a4ab15ebd0330fb0c538c405";

    //console.log(cityNameSubmissionEl.val());

    fetch(url) 
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            fetchOneCall(data[0].lat, data[0].lon, city);
        })

}

function fetchOneCall (lat, lon, city) {

    // API Key: abd3df57a4ab15ebd0330fb0c538c405
    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=abd3df57a4ab15ebd0330fb0c538c405";
    
    fetch(url) 
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            // Render to page function
            renderCurrentWeather(data, city);
            renderFiveDayForecast(data);
        })

}

// Print/Render functions:

// Prints Today's Weather
function renderCurrentWeather (data, city) {

    // Print location, today's date, weather icon, wind speed, and humidity
    todaysWeatherEl.append(`
        <h2>${city} (${moment().format('L')}) <img src="http://openweathermap.org/img/w/${data.current.weather[0].icon}.png" alt="${data.current.weather[0].description}"></h2>
        <p>Temp: ${data.current.temp}°F</p>
        <p>Wind: ${data.current.wind_speed} MPH</p>
        <p>Humidity: ${data.current.humidity} %</p>
    `);

    // Print UV Index
    if (data.current.uvi < 3) {
        // UVI in green box
        todaysWeatherEl.append(`
            <p>UV Index: ${data.current.uvi} green</p>
        `);
    } else if (data.current.uvi < 6 && data.current.uvi > 2) {
        // UVI in yellow box
        todaysWeatherEl.append(`
            <p>UV Index: ${data.current.uvi} yellow</p>
        `);
    } else if (data.current.uvi < 8 && data.current.uvi > 5) {
        // UVI in orange box
        todaysWeatherEl.append(`
            <p>UV Index: ${data.current.uvi} orange</p>
        `);
    } else if (data.current.uvi < 11 && data.current.uvi > 7){
        // UVI in red box
        todaysWeatherEl.append(`
            <p>UV Index: ${data.current.humidity} red</p>
        `);
    } else {
        // UVI in purple box
        todaysWeatherEl.append(`
            <p>UV Index: ${data.current.humidity} purple</p>
        `);
    }


}

// Prints the weather for the next few days
function renderFiveDayForecast (data) {
    for (var i = 0; i < 5; i++){
        // Print date, weather icon, temp, wind speed, and humidity
        fiveDayForecastEl.append(`
            <div id="forecast-day-${i}">
                <h3>${moment().add(i + 1, 'days').calendar()}</h3>
                <img src="http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="${data.daily[i].weather[0].description}">
                <p>Temp: ${data.daily[i].temp.day}°F</p>
                <p>Wind: ${data.daily[i].wind_speed} MPH</p>
                <p>Humidity: ${data.daily[i].humidity} %</p>
            </div>
        `)
    }
}

// Adds the previous searches as buttons below the search button
function previousSearchButtons () {
    searchHistoryEl.append(`
        <button>${cityNameSubmissionEl.val()}</button>
    `)
}
Print/Render the weather data to the page. 

From the <form> element, listen to the "submit"
From the <button> element, listen to the "click"

    Select <input>, get its value, and provide it to the geo API

From the <button> container element, listen to the <button> "click

    Get the city from the button's data attribute

Fetch the geo data (lat, lon)

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

    q = Name of the city

    limit = 5

    appid = Your custom API key

Fetch the one call weather data

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

    lat

    lon

    appid

    units = imperial

    exclude minutely, hourly

Print/Render the weather data to the page
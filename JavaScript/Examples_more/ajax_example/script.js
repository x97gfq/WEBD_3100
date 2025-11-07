const API_KEY = "";

function getWeatherInfo() {
    // Check if the Geolocation API is available in the user's browser
    if ("geolocation" in navigator) {
        // Request the current position
        navigator.geolocation.getCurrentPosition(function(position) {
            // Extract latitude and longitude from the position object
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Construct the URL for the OpenWeatherMap API
            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

            // Make a fetch request to the OpenWeatherMap API
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok " + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle the response here
                    console.log(data);

                    //
                    //
                    // and display the weather data
                    //
                    //
                    // images? https://openweathermap.org/weather-conditions
                    //  e.g. https://openweathermap.org/img/wn/04n@2x.png
                    //

                })
                .catch(error => {
                    // Handle errors here
                    console.error("Error fetching weather data:", error);
                });
        }, function(error) {
            // Handle errors in retrieving the position
            console.error("Error getting location:", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

window.addEventListener("load", (event) => {
    const btn = document.getElementById("getWeatherBtn");
    btn.addEventListener("click", getWeatherInfo);
});

document.addEventListener("DOMContentLoaded", () => {
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const locationInput = document.getElementById("locationInput");
    const weatherInfo = document.getElementById("weatherInfo");
    const locationName = document.getElementById("locationName");
    const weatherCondition = document.getElementById("weatherCondition");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");

    const apiKey = "7a15d3178bb336e803ffd5cd365b64b4"; // Replace with your actual API key
    const weatherApiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";

    fetchWeatherButton.addEventListener("click", () => {
        const location = locationInput.value;
        if (location) {
            getWeatherData(location);
        }
    });

    function getWeatherData(location) {
        const apiUrl = `${weatherApiBaseUrl}?q=${location}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                locationName.textContent = data.name;
                weatherCondition.textContent = data.weather[0].description;
                temperature.textContent = data.main.temp;
                humidity.textContent = data.main.humidity;

                weatherInfo.style.display = "block";
            })
            .catch((error) => {
                console.error("Error fetching weather data: ", error);
                locationName.textContent = "Location not found";
                weatherInfo.style.display = "block";
            });
    }
});

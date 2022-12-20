let cityEl = document.querySelector("#city");
let getWeatherButton = document.querySelector("#get-weather-button");
let weatherContainer = document.querySelector("#weatherContainer");
// let citySearch = document.quereySelector("#citySearch");

let getWeather = function (city) {
  preventDefault();
  let apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=69fb8d6c750749f287a185748221912&q=" +
    city +
    "&aqi=no";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (city) {
        displayWeather(city);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

// let displayWeather = function (weather, weatherContainer) {
//   if (weather.length === 0) {
//     weatherContainer.textcontent = "Please Enter Valid City.";
//     return;
//   }

//   weatherContainer.textcontent = searchTerm;
// };

cityEl.addEventListener("submit", getWeather);
// weatherContainer.addEventListener("click", displayWeather);

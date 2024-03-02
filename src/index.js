function refreshWeather(response){
    let temperatureElement = document.querySelector("#current-temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let currentDateElement = document.querySelector("#current-date");
    let date = new Date(response.data.time * 1000)

    console.log(response.data);

    cityElement.innerHTML = response.data.city
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    currentDateElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date){
    let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
}
function searchCity(city){
let apiKey = "41at4c04f5a3b46cad70ddb313o279b2";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}
function search(event){
    event.preventDefault()
    let searchInputElement = document.querySelector("#search-input");
   
    searchCity(searchInputElement.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);
searchCity("Paris");
function refreshWeather(response){
    let temperatureElement = document.querySelector("#current-temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature)
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
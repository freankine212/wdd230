const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const description = document.querySelector('#description');
//const currentSpeed = document.querySelector('#windspeed');
//const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const forecast = document.querySelector('#forecast');

const daysForecast = 3;
const forecastInterval = 3; //hours
const forecastsPerDay = 24 / forecastInterval //8

const daysEnum = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=888776a05dd616e8f6e0c4f0c0ee207e";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=888776a05dd616e8f6e0c4f0c0ee207e";

async function apiFetch() {
    try {
      const response = await fetch(forecastURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
            displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
function calculateWindChill(speed, temp) {
  if (windSpeed > 3.0 & temperature <= 50) {
      return (35.74 + .621 * temp - (35.75 * speed ** .16) + .4275 * temp * speed ** .16).toFixed(0);
  }
  else {
      return "N/A"
  }
}

function toUpperCamelCase(inputString) {
  return inputString.split(" ").map(word => {
      let firstLetter = word.charAt(0).toUpperCase();
      return `${firstLetter}${word.slice(1)}`;
  }).join(" ");
}

function  displayResults(weatherData) {
  const currentWeather = weatherData.list[0];
  currentTemp.innerHTML = `<strong>${currentWeather.main.temp.toFixed(0)}F</strong>`;
  //console.log("displayResults, weatherData: ", weatherData);
  //currentSpeed.innerHTML= `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  //feelsLike.innerHTML = `<strong>${weatherData.main.feels_like.toFixed(0)}</strong>`;
      currentTemp.innerHTML = `<strong>${currentWeather.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
  const desc = currentWeather.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  const capitalizedDescription = toUpperCamelCase(currentWeather.weather[0].description);
  description.innerHTML = `<h3>${capitalizedDescription}</h3>`;
  humidity.innerHTML = `<h3>Humidity: ${currentWeather.main.humidity}</h3>`;
  let forecastHTML = "<h3>FORECAST</h3>";
  for (let i = 0; i < 3*8; i += forecastsPerDay) {
      const forecastDate = new Date();
      forecastDate.setTime(weatherData.list[i].dt * 1000);
      forecastHTML += `<div class="forecast-item">${daysEnum[forecastDate.getDay()]}<br>High: ${avgMax(i, weatherData)}°F<br>Low: ${avgMin(i,weatherData)}°F</div>`;
  }
  forecast.innerHTML = forecastHTML;
}


function avgMax(startIndex, forecasts) {
  let sum = 0;
  for (let i = startIndex; i < startIndex + forecastsPerDay; i++) {
      sum += forecasts.list[i].main.temp_max;
  }
  return Math.floor(sum / forecastsPerDay);
}
function avgMin(startIndex, forecasts) {
  let sum = 0;
  for (let i = startIndex; i < startIndex + forecastsPerDay; i++) { 
      sum += forecasts.list[i].main.temp_min;
  }
  return Math.floor(sum / forecastsPerDay);
}
apiFetch();
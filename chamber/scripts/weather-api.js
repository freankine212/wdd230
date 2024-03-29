const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentSpeed = document.querySelector('#windspeed');
const feelsLike = document.querySelector('#feels-like');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rupert&units=imperial&appid=888776a05dd616e8f6e0c4f0c0ee207e';


async function apiFetch() {
    try {
      const response = await fetch(url);
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
  
  apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    //console.log("displayResults, weatherData: ", weatherData);
    currentSpeed.innerHTML= `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    feelsLike.innerHTML = `<strong>${weatherData.main.feels_like.toFixed(0)}</strong>`;
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

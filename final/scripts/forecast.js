const foreurl = 'https://api.openweathermap.org/data/2.5/forecast?q=Encinitas&units=imperial&cnt=3&appid=888776a05dd616e8f6e0c4f0c0ee207e';

const dailyFore = document.querySelector('#daily-forecast');



async function apiFetch() {
    try {
      const response = await fetch(foreurl);
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
        //console.log("displayResults, weatherData: ", weatherData);
        dailyFore.innerHTML = `<strong>${weatherData.list.main.temp.toFixed(0)}</strong>`;
currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;


const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
const desc = weatherData.weather[0].description;

weatherIcon.setAttribute('src', iconsrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;
}
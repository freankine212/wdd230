function windChill(tempF, speed) {
    if (tempF <= 50 && speed >= 3) {
        var windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        return windChill.toFixed(2) + "°F";
    } else {
        return "Wind chill calculation is not valid for this temperature and wind speed.";
    }
}

var temperature = parseFloat(prompt("Enter the air temperature in Fahrenheit:"));
var windSpeed = parseFloat(prompt("Enter the wind speed in miles per hour:"));

document.getElementById("howCold").innerHTML=windChill(temperature,windSpeed);
document.getElementById("cold").innerHTML= temperature + "°F";

//document.write("The wind chill temperature is " + windChill(temperature, windSpeed));

// document.querySelector("howCold").textContent = temp.toFixed(1);
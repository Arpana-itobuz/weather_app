const locationPlace = document.querySelector("input");
let image = document.querySelector(".top-section img");
console.log(image);
async function getWeatherData(query) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${query}&aqi=no`
  ).then(function (res) {
    return res.json();
  });
  console.log(response);
  locationPlace.value = response.location.name;
  // console.log(locationPlace.innerHTML);

  const temperature = document.getElementById("temperature");
  temperature.innerHTML = `${response.current.temp_c}°`;
  console.log(response.current.temp_c);
  if (response.current.temp_c < 5) {
    image.src = "./images/snowy-6.svg";
  } else if (response.current.temp_c >= 5 && response.current.temp_c < 10) {
    image.src = "./images/snowy-3.svg";
  } else if (response.current.temp_c >= 10 && response.current.temp_c < 20) {
    image.src = "./images/rainy-4.svg";
  } else if (response.current.temp_c >= 20 && response.current.temp_c < 30) {
    image.src = "./images/cloudy-day-3.svg";
  } else if (response.current.temp_c >= 30 && response.current.temp_c < 40) {
    image.src = "./images/cloudy-day-1.svg";
  }

  const feelsLike = document.getElementById("feels-like");
  feelsLike.innerHTML = `Feels ${response.current.feelslike_c}°`;
}

locationPlace.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log(e.target.value);
    getWeatherData(e.target.value);
  }
});

window.onload = () => {
  getWeatherData("kolkata");
};

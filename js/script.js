async function getWeatherData() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no"
  ).then(function (res) {
    return res.json();
  });
  console.log(response);
  const locationPlace = document.getElementById("location")
  locationPlace.innerHTML = response.location.name;

  const temperature = document.getElementById("temperature")
  temperature.innerHTML = `${response.current.temp_c}°`;

  const feelsLike = document.getElementById("feels-like")
  feelsLike.innerHTML = `Feels ${response.current.feelslike_c}°`;
  console.log(response.current.feelsLike);

  const humidity = document.getElementById("humidity")
  humidity.innerHTML = `Humidity: ${response.current.humidity}`;

  const cloud = document.getElementById("cloud")
  cloud.innerHTML = `Cloud: ${response.current.cloud}`;

  const uv = document.getElementById("uv")
  uv.innerHTML = `uv: ${response.current.uv}`;
}

getWeatherData();

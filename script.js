async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'baa023f650136877c18a59e2bc7983a0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    const weatherHTML = `
    <img height='100px' width='100px' src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      <h2 class='cityName'>${data.name}</h2>
      <p>${data.weather[0].description}</p>
      <div class="stats">
          <div>
            🌡 Temp:<span id="temperature">${data.main.temp} °C</span>
          </div>
          <div>
            💧 Humidity:<span id="humidity">${data.main.humidity}%</span>
          </div>
          <div>
            💨 Wind:<span id="windSpeed">${data.wind.speed} m/s</span>
          </div>
        </div>
    `;
    document.getElementById('weatherResult').innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
}

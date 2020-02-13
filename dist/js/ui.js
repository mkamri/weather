class UI {
  constructor() {
    this.city = document.getElementById('w-city');
    this.units = document.getElementById('w-units');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temperature = document.getElementById('w-temperature');
    this.wind = document.getElementById('w-wind');
    this.description = document.getElementById('w-description');
  }

  paint(result){
    this.city.textContent = weather.city;
    this.units.textContent = 'F / C';
    this.icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    this.feelsLike.textContent = result.main.feels_like.toFixed(1);
  };
};
class UI {
  constructor() {
    this.city = document.getElementById('w-city');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temperature = document.getElementById('w-temperature');
    this.wind = document.getElementById('w-wind');
    this.description = document.getElementById('w-description');
  }

  paint(result){
    this.city.textContent = result.name;
    this.unitsSwitch(weather.units);
    this.icon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    this.feelsLike.textContent = `${result.main.feels_like.toFixed(1)}\u00B0`;
    this.temperature.textContent = `${result.main.temp.toFixed(1)}\u00B0`;
    this.wind.textContent = `${result.wind.speed.toFixed(1)}`;
  };

  unitsSwitch(units){
    const imperialStyle = document.getElementById('w-imperial').style;
    const metricStyle = document.getElementById('w-metric').style;

    if (units === 'imperial'){
      metricStyle.color = "#D3D3D3";
      imperialStyle.color = "#000000";
    } else if (units === 'metric'){
      imperialStyle.color = "#D3D3D3";
      metricStyle.color = "#000000";
    }
  }
};
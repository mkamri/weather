class Weather {
  constructor(city, state) {
    this.apiKey = '103e41e1f9fdd4e18a872b70f4a1c251';
    this.city = city;
    this.state = state;
    this.units = 'imperial';
  };

  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=${units}`);
    const responseData = await response.json();
    return responseData;
  }

  changeUnits() {
    if(this.units === 'imperial') {
      this.units = 'metric'
    } else if (this.units === 'metric') {
      this.units = 'imperial';
    }
  }

  changeLocation(newCity, newState) {
    this.city = newCity;
    this.state = newState;
  }
};
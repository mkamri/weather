const weather = new Weather('Dayton', 'Ohio');
weather.getWeather()
  .then(res => console.log(res))
  .catch(err => console.log(err));

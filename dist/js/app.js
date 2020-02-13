// Init UI
const ui = new UI();

// Init weather
const weather = new Weather('Dayton', 'Ohio');


weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));

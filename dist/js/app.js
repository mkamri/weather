// Init UI
const ui = new UI();

// Init weather
const weather = new Weather();

// Set units to default (imperial)
let units = 'imperial';

// Set default location
weather.changeLocation('Tokyo', 'Japan');

// Call innitial get weather function
getWeather(units);


// Change units function
document.getElementById('w-units').addEventListener('click', () => {
    if(units === 'imperial') {
      units = 'metric';
    } else if (units === 'metric') {
      units = 'imperial';
    };
    ui.unitsSwitch(units);
    getWeather(units);
    console.log(units);
});

// Get weather function
function getWeather(units) {
  weather.getWeather(units)
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}


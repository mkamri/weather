// Init UI
const ui = new UI();

// Init weather
const weather = new Weather();

// Set units to default (imperial)
let units = weather.units;

// Set default location
weather.changeLocation('Tokyo', 'Japan');

// Call innitial get weather function (below)
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

// Change location function
const form = document.getElementById('change-location-form');

form.addEventListener('submit', (e) => {
  const cityInputContent = document.getElementById('text-input-city').value.trim();
  const stateInputContent = document.getElementById('text-input-state').value.trim();
  if(cityInputContent !='' && stateInputContent != '') {
    weather.changeLocation(cityInputContent, stateInputContent);
    getWeather(units);
    document.querySelector('.modal').style.display = 'none';
  }

  e.preventDefault();
})

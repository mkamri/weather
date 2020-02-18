// Init UI and weather
const ui = new UI();
const weather = new Weather();

// Set units to default (imperial)
let units = weather.units;

// Set default location
if (localStorage.getItem('city') === null || localStorage.getItem('state') === null) {
  weather.changeLocation('Tokyo', 'Japan');
} else {
  weather.changeLocation(localStorage.getItem('city'), localStorage.getItem('state'));
};

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
    .catch(err => {
      console.log(err);
      })
}

// Change location function
const form = document.getElementById('change-location-form');

form.addEventListener('submit', (e) => {
  const errorMessage = document.getElementById('error-message');

  //trim removes accidental whitespace at beginning or end
  const cityInputContent = document.getElementById('text-input-city').value.trim();
  const stateInputContent = document.getElementById('text-input-state').value.trim();

  //error messages for various blank spaces
  if(cityInputContent === '' && stateInputContent === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a city and region.';
  } else if(cityInputContent === '' && stateInputContent !== '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a city name.';
  } else if (stateInputContent === '' && cityInputContent !== '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a region name.';


    // Runs the get weather program if there is content in both boxes
  } else if(cityInputContent !== '' && stateInputContent !== '') {
    weather.changeLocation(cityInputContent, stateInputContent);
    weather.getWeather(units)
      .then(results => {
        ui.paint(results);
        document.querySelector('.modal').style.display = 'none';
        errorMessage.style.display = 'none';
      })
      .catch(err => {
        if (err instanceof TypeError) {
          errorMessage.style.display = 'block';
        } else {
          errorMessage.textContent = 'Unknown error: Please refresh and try again.';
          errorMessage.style.display = 'block';
        }
    })
  }

  e.preventDefault();
})

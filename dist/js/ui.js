class UI {
  constructor() {
    this.city = document.getElementById('w-city');
    this.icon = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temperature = document.getElementById('w-temperature');
    this.wind = document.getElementById('w-wind');
    this.description = document.getElementById('w-description');
    this.colorScheme;
  }

  // Paints the data from API into the UI
  paint(result){
    this.city.textContent = result.name;
    this.unitsSwitch(units); //Paints the units bar the correct color innitially
    this.iconFinder(result);
    this.feelsLike.textContent = `${result.main.feels_like.toFixed(1)}\u00B0`;
    this.temperature.textContent = `${result.main.temp.toFixed(1)}\u00B0`;
    this.wind.textContent = `${result.wind.speed.toFixed(1)}`;
    this.description.textContent = `${result.weather[0].description}`;
    this.colorTheme(result); // assigns a color scheme to the variable
  };

  // Changes units from imperial <--> metric
  unitsSwitch(units){
    const imperialStyle = document.getElementById('w-imperial');
    const metricStyle = document.getElementById('w-metric');
    const unitsButton = document.getElementById('w-units');

    if (units === 'imperial'){
      metricStyle.style.color = "#666666";
      metricStyle.style.borderBottomColor = "#f7f4ec00";
      imperialStyle.style.color = "#f7f4ec";
      imperialStyle.style.borderBottomColor = "#f7f4ec";
    } else if (units === 'metric'){
      imperialStyle.style.color = "#666666";
      imperialStyle.style.borderBottomColor = "#f7f4ec00";
      metricStyle.style.color = "#f7f4ec";
      metricStyle.style.borderBottomColor = "#f7f4ec";
    }
  }

  // Gets fontawesome icons instead of standard API icons
  iconFinder(result) {
    // List of correlations between fontawesome icons and API icons
    const weatherIconList = {
      '01d': 'fas fa-sun',
      '01n': 'fas fa-moon',
      '02d': 'fas fa-cloud-sun',
      '02n': 'fas fa-cloud-moon',
      '03d': 'fas fa-cloud',
      '03n': 'fas fa-cloud',
      '04d': 'fas fa-cloud',
      '04n': 'fas fa-cloud',
      '09d': 'fas fa-cloud-rain',
      '09n': 'fas fa-cloud-rain',
      '10d': 'fas fa-cloud-sun-rain',
      '10n': 'fas fa-cloud-moon-rain',
      '11d': 'fas fa-bolt',
      '11n': 'fas fa-bolt',
      '13d': 'far fa-snowflake',
      '13n': 'far fa-snowflake',
      '50d': 'fas fa-smog',
      '50n': 'fas fa-smog'
    };
    // Assign icon class name to the correlating fontawesome icon class
    this.icon.className = `${weatherIconList[result.weather[0].icon]}`;
  }

  // Changes UI colors based on current weather
  colorTheme(result) {
    const colorIconList = {
      '01d': 'peach',
      '01n': 'navy',
      '02d': 'peach',
      '02n': 'navy',
      '03d': 'babyBlue',
      '03n': 'navy',
      '04d': 'babyBlue',
      '04n': 'navy',
      '09d': 'babyBlue',
      '09n': 'plum',
      '10d': 'plum',
      '10n': 'plum',
      '11d': 'plum',
      '11n': 'slate',
      '13d': 'babyBlue',
      '13n': 'slate',
      '50d': 'heather',
      '50n': 'slate'
    };
    this.colorScheme = `${colorIconList[result.weather[0].icon]}`;

    //Init colorize with the correct color theme and paint that theme
    const colorize = new Colorize(this.colorScheme);
    colorize.paint();
  }
};
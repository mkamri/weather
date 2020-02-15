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
    this.unitsSwitch(units); //Paints the units the correct color innitially
    this.iconFinder(result);
    this.feelsLike.textContent = `${result.main.feels_like.toFixed(1)}\u00B0`;
    this.temperature.textContent = `${result.main.temp.toFixed(1)}\u00B0`;
    this.wind.textContent = `${result.wind.speed.toFixed(1)}`;
    this.description.textContent = `${result.weather[0].description}`;
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

  iconFinder(result) {
    // List of correlations between fontawesome icons and API icons
    const iconList = {
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
    this.icon.className = `${iconList[result.weather[0].icon]}`;
  }

  colorize(result) {
    const iconList = {
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
  }
};

/**
 * 
 * Make a function called colorize
 * let that function determine colorScheme based on icon number
 * pass colorScheme through a method is in js.colorize
 * That method colorizes the ui based on the colorScheme determined here
 * That method also has a default colorization in case there is an error
 * 
 */
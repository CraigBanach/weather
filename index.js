var options = {
  weekday: "long"
}

var weatherMap = {
  "01d": {
    icon: "fas fa-sun fa-5x",
    bg  : "card bg sun"
  },
  "02d": {
    icon: "fas fa-sun fa-5x",
    bg  : "card bg sun"
  },
  "03d": {
    icon: "fas fa-cloud fa-5x",
    bg  : "card bg clouds"
  },
  "04d": {
    icon: "fas fa-cloud fa-5x",
    bg  : "card bg clouds"
  },
  "09d": {
    icon: "fas fa-tint fa-inverse fa-5x",
    bg  : "card bg rain"
  },
  "10d": {
    icon: "fas fa-tint fa-inverse fa-5x",
    bg  : "card bg rain"
  },
  "11d": {
    icon: "fas fa-snowflake fa-5x",
    bg  : "card bg snow"
  },
  "13d": {
    icon: "fas fa-bolt fa-inverse fa-5x",
    bg  : "card bg storm"
  },
  "50d": {
    icon: "fas fa-angle-double-down fa-5x",
    bg  : "card bg mist"
  }
}

function GetForecast() {
  var city = $('#city').val();
  var countryCode = $('#countryCode').val();

  $('#submitButton').attr("disabled", "disabled");
  GetWeatherData(city, countryCode);
}

function GetWeatherData(city, countryCode) {
  var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&APPID=e37c2aae9d042422f66716be5e424ddf`;

  $.ajax(url)
    .done(function(data) {
      console.log(data);
      HandleApiData(data);
    })
    .fail(function() {
      alert("failure");
    })
    .always(function() {
      console.log("API call completed");
      $('#submitButton').removeAttr("disabled");
    })
}

function HandleApiData(data) {
  var forecasts = data.list;
  forecasts = forecasts.filter(forecast => new Date(forecast.dt_txt).getHours() == 12);

  forecasts.sort(function (a, b) {
    return a.dt > b.dt;
  })

  console.log(forecasts);

  for (var i = 0; i < 5; i++) {
    SetForecast(forecasts[i], i);
  }
}

function CheckKeyPress(event) {
  if (event.keyCode == 13) {
    $('#submitButton').click();
  }
}

function SetForecast(forecast, index) {
  $(`#temp${index + 1}`).text(forecast.main.temp.toCelcius(1) + "°C");
  $(`#temp${index + 1}Title`).text(new Date(forecast.dt_txt).toLocaleDateString("en-GB", options));
  $(`#temp${index + 1}Icon`).attr("class", weatherMap[forecast.weather[0].icon].icon);
  $(`#card${index + 1}`).attr("class", weatherMap[forecast.weather[0].icon].bg);
}

Number.prototype.toCelcius = function(decimalPlaces){
  return (this - 273.15).toFixed(decimalPlaces);
}

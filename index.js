function GetForecast() {
  var city = $('#city').val();
  var countryCode = $('#countryCode').val();

  $('#submitButton').attr("disabled", "disabled");
  GetWeatherData(city, countryCode);
}

function GetWeatherData(city, countryCode) {
  var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&APPID=e37c2aae9d042422f66716be5e424ddf`;

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

  var options = {
    weekday: "long"
  }

  for (var i = 0; i < 5; i++) {
    $(`#temp${i + 1}`).text(forecasts[i].main.temp.toCelcius(2) + "°C");
    $(`#temp${i + 1}Title`).text(new Date(forecasts[i].dt_txt).toLocaleDateString("en-GB", options));
  }
}

function CheckKeyPress(event) {
  if (event.keyCode == 13) {
    $('#submitButton').click();
  }
}

Number.prototype.toCelcius = function(decimalPlaces){
  return (this - 273.15).toFixed(decimalPlaces);
}

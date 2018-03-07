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
  var filtered = Object.filter(data.list, forecast => new Date(forecast.dt_txt).getHours() == 12);
  console.log("filtered:");
  console.log(filtered);
}

function CheckKeyPress(event) {
  if (event.keyCode == 13) {
    $('#submitButton').click();
  }
}

Object.filter = (obj, predicate) =>
  Object.keys(obj)
        .filter( key => predicate( obj[key] ))
        .reduce( (res, key) => (res[key] = obj[key], res), {} );

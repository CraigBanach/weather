function GetForecast() {
  var city = $('#city').val();
  var countryCode = $('#countryCode').val();

  $('#submitButton').attr("disabled", "disabled");
  GetWeatherData(city, countryCode);
}

function GetWeatherData(city, countryCode) {
  var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&APPID=e37c2aae9d042422f66716be5e424ddf`;

  $.ajax(url)
    .done(function() {
      alert("success");
    })
    .fail(function() {
      alert("failure");
    })
    .always(function() {
      console.log("API call completed");
      $('#submitButton').removeAttr("disabled");
    })
}

function CheckKeyPress(event) {
  if (event.keyCode == 13) {
    $('#submitButton').click();
  }
}

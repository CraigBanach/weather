# Weather forecast

Simple 5 day weather forecast webpage, written in HTML, CSS, Javacript and Jquery.

After entering the desired city and country code, the data is fetched from openweathermap.org and the midday results are displayed to the user for the next 5 noons.

## Usage instructions

This project is currently displayed at [https://craigbanach.github.io/weather/].

You can run this project locally by downloading this repository and opening the index.html file in your favourite web browser (Not guaranteed to work in IE or Edge).

## Project decisions, bugs and desired features

#### Known Bugs

 - If run locally, there is a bug where the degrees character (°) causes a strange character to be inserted before it: 10.2Â°C

#### Desired Improvements

 - I'd like to remove the magic string in index.js: GetWeatherData().
 - Add in a button for other temperature scales.
 - Add in a dropdown to select which specific API you'd like to use (postcode, coordinates etc.)
 - On click of a card, show the forecast for each period in the day.
 - More weather icons and backgrounds to further differentiate the icon numbers from openWeather.
 - More stringent input validation and more helpful error message.

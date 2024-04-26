const apiKeyForCurrentWeather = "19657389b5a92bc90f4c4b40dc08d087";
const apiKeyForWeatherForecast = "d8142cd9d13741babad589eaacb6a8d8";
const urlForCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const urlForWeatherForcast = "https://api.weatherbit.io/v2.0/forecast/daily?city=";
const inputBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weather(city){
    const currentWeatherResponse = await fetch(urlForCurrentWeather + city + "&units=metric&appid=" + apiKeyForCurrentWeather);
    const forecastWeatherResponse = await fetch(urlForWeatherForcast + city + "&key=" + apiKeyForWeatherForecast);
    if(!currentWeatherResponse.ok){
        alert("No weather found");
    }
    const currentWeatherData = await currentWeatherResponse.json();
    const forecastData = await forecastWeatherResponse.json();
    console.log(currentWeatherData);
    console.log(forecastData);
    const{icon, description, main} = currentWeatherData.weather[0];

    // Date

    // Get the current date
    var today = new Date();

    // Get the day of the month
    var dd = today.getDate();

    // Get the month (adding 1 because months are zero-based)
    var mm = today.getMonth() + 1;

    // Get the year
    var yyyy = today.getFullYear();

    // Add leading zero if the day is less than 10
    if (dd < 10) {
        dd = '0' + dd;
    } 

    // Add leading zero if the month is less than 10
    if (mm < 10) {
        mm = '0' + mm;
    } 

    // Format the date as mm-dd-yyyy and log it
    today =yyyy + '-' + mm + '-' + dd ;




    // Current Weather

    document.querySelector(".city").innerHTML = "Weather in " + currentWeatherData.name;
    document.querySelector(".temp").innerHTML = Math.round(currentWeatherData.main.temp) + "° C";
    document.querySelector(".date").innerHTML = "Date: " + today;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerHTML = "Humidity: "+currentWeatherData.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + currentWeatherData.wind.speed + " km/h";

    // Forecast

    document.querySelector(".max-temp-0").innerHTML = forecastData.data[1].max_temp + "°C";
    document.querySelector(".min-temp-0").innerHTML = forecastData.data[1].min_temp + "°C";
    document.querySelector(".d0").src = "https://cdn.weatherbit.io/static/img/icons/" + forecastData.data[1].weather.icon + ".png";
    document.querySelector(".date-0").innerHTML = forecastData.data[1].valid_date;


    document.querySelector(".max-temp-1").innerHTML = forecastData.data[2].max_temp + "°C";
    document.querySelector(".min-temp-1").innerHTML = forecastData.data[2].min_temp + "°C";
    document.querySelector(".d1").src = "https://cdn.weatherbit.io/static/img/icons/" + forecastData.data[2].weather.icon + ".png";
    document.querySelector(".date-1").innerHTML = forecastData.data[2].valid_date;


    

    document.querySelector(".max-temp-2").innerHTML = forecastData.data[3].max_temp + "°C";
    document.querySelector(".min-temp-2").innerHTML = forecastData.data[3].min_temp + "°C";
    document.querySelector(".d2").src = "https://cdn.weatherbit.io/static/img/icons/" + forecastData.data[3].weather.icon + ".png";
    document.querySelector(".date-2").innerHTML = forecastData.data[3].valid_date;

    document.querySelector(".max-temp-3").innerHTML = forecastData.data[4].max_temp + "°C";
    document.querySelector(".min-temp-3").innerHTML = forecastData.data[4].min_temp + "°C";
    document.querySelector(".d3").src = "https://cdn.weatherbit.io/static/img/icons/" + forecastData.data[4].weather.icon + ".png";
    document.querySelector(".date-3").innerHTML = forecastData.data[4].valid_date;



    document.querySelector(".max-temp-4").innerHTML = forecastData.data[5].max_temp + "°C";
    document.querySelector(".min-temp-4").innerHTML = forecastData.data[5].min_temp + "°C";
    document.querySelector(".d4").src = "https://cdn.weatherbit.io/static/img/icons/" + forecastData.data[5].weather.icon + ".png";
    document.querySelector(".date-4").innerHTML = forecastData.data[5].valid_date;



    // -------------------- //

    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + main + "')";
    document.querySelector(".weather").classList.remove("loading");
    
}
function search(){
    weather(inputBox.value);
}
searchBtn.addEventListener("click", function () {
    if(inputBox.value!== " "){
        search(inputBox.value);
    }
});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        search(inputBox.value);
    }
});
weather("Jamshedpur"); 

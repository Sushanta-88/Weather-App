const apiKey = "19657389b5a92bc90f4c4b40dc08d087";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const inputBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function weather(city){
    const response = await fetch(url + city + "&units=metric&appid=" + apiKey);
    if(!response.ok){
        alert("No weather found");
    }
    const data = await response.json();
    console.log(data);
    const{icon, description, main}= data.weather[0];
    document.querySelector(".city").innerHTML= "Weather in " + data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML= description;
    document.querySelector(".humidity").innerHTML= "Humidity: "+data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= "Wind speed: " + data.wind.speed + " km/h";
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
weather("Switzerland"); 
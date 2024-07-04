
const apiKey = "0381a0e69ab4da2cafbc645f953cfeca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheaterIcon =  document.querySelector(".wheater-icon")

async function checkWeather(City){
    const response = await fetch(apiUrl  + City + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }
    else{
        var data = await response.json();
        document.querySelector(".City").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Clouds"){
        wheaterIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wheaterIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        wheaterIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wheaterIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        wheaterIcon.src = "mist.png";
    }
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
    }

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
 checkWeather("Delhi");


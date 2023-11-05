const apiKey="0c7ddb2c13c0807fd4ff70c147d50a92";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const SearchBox=document.querySelector(".search input")
const SearchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")



async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    
   else{
    var data=await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp-270) +"°c"
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h"

    if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/cloudy.png"
    }

    else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/sun.png"
    }

   else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/heavy-rain.png"
    }

   else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/fog.png"
    }
    else{
    weatherIcon.src="images/snowy.png"
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

}

   }
SearchBtn.addEventListener('click',()=>{
    checkWeather(SearchBox.value);
})

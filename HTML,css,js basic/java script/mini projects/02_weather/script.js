document.addEventListener('DOMContentLoaded', function () {
const cityInput=document.getElementById('city-input');
const getWeatherBtn=document.getElementById('get-weather-btn');
const weatherInfo=document.getElementById('weather-info');
const cityNameDisplay=document.getElementById('city-name');
const temperatureDisplay=document.getElementById('temperature');
const descriptionDisplay=document.getElementById('description');
const errorMessage=document.getElementById('error-message');
const apky=`0df2bb80ade0b8259e799762e7c6af6d`;
getWeatherBtn.addEventListener('click', async function(){
  const cityName=cityInput.value.trim();
  if(!cityName)return;
  //it may throw an error 
  //server/database is always in the other side of the world
  
  try{
    const weatherData=await featchweatherdata(cityName)
    displayweatherdata(weatherData);
  }
  catch(error){
    console.error(error);
    showError();
  }

})

async function featchweatherdata(city)
{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apky}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
function displayweatherdata(WeatherData)
{
  const{name,main,weather}=WeatherData;
  cityNameDisplay.textContent=name;
  temperatureDisplay.textContent=`Temperature:${main.temp}°C`;  
  let newItem = document.createElement("img");
  newItem.src =`https://openweathermap.org/img/wn/${weather[0].icon}.png` ;
  weatherInfo.appendChild(newItem);;
  descriptionDisplay.textContent=`Weather: ${weather[0].description}`;


  weatherInfo.classList.remove('hidden');
  errorMessage.classList.add('hidden');
//console.log(WeatherData);
}
function showError()
{
weatherInfo.classList.remove('hidden');
errorMessage.classList.remove('hidden');
}
});
document.addEventListener('DOMContentLoaded', function () {
const cityInput=document.getElementById('city-input');
const getWeatherBtn=document.getElementById('get-weather-btn');
const weatherInfo=document.getElementById('weather-info');
const cityNameDisplay=document.getElementById('city-name');
const temperatureDisplay=document.getElementById('temperature');
const descriptionDisplay=document.getElementById('description');
const errorMessage=document.getElementById('error-message');
const apky=`0df2bb80ade0b8259e799762e7c6af6d`;
getWeatherBtn.addEventListener('click',function(){
  const cityName=cityInput.value.trim();
  if(!cityName)return;


})

function featchweatherdata(city)
{

}
function displayweatherdata(data)
{

}
function displayerror()
{
weatherContainer.classList.add('hidden');
errormessage.classList.remove('hidden');
}
});
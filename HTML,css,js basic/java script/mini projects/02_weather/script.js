document.addEventListener('DOMContentLoaded', function () {
const city=document.getElementById('city-input');
const searchbtn=document.getElementById('get-weather-btn');
const weatherContainer=document.getElementById('weather-info');
const weatherCity=document.getElementById('city-name');
const temperature=document.getElementById('temperature');
const description=document.getElementById('description');
const errormessage=document.getElementById('error-message');
const apky=`0df2bb80ade0b8259e799762e7c6af6d`;
searchbtn.addEventListener('click',function(){
  const cityname=city.value.trim();
  if(!cityname)return;


})

function featchweatherdata(city)
{

}
function displayweatherdata(data)
{

}
function displayerror()
{

});
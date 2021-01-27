var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
 var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

const Kelvin=273;

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8c9304cd9bff59de4ad41edad1c64712')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
 // console.log(data['name']);
  var descValue = data['weather'][0]['description'];

  main.innerHTML = "City -"+nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+Math.ceil(tempValue-Kelvin)+" °C";
   

})

.catch(err => alert("Wrong city name!"));
})
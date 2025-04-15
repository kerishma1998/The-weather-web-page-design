let now= new Date();
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"];
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
let p = document.querySelector(".time");
p.innerHTML=days[now.getDay()] + ", " + now.getDate() + " "+ months[now.getMonth()]+" " + now.getFullYear() + " | "+ now.getHours() + ":" + now.getMinutes();

function search(event){
    event.preventDefault();
    let input=document.querySelector(".CitySearcher");
let h1=document.querySelector(".CityName");
h1.innerHTML=input.value;
let city = input.value;
let apiKey = "b999985ba9offfd63488b705a2dctf1f";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metrics`;
axios.get(apiUrl).then(function currentWeather(response) {
let h2= document.querySelector(".current-temperature-value");
h2.innerHTML= Math.round(response.data.temperature.current) +"°C";
let descrip= document.querySelector(".condition");
descrip.innerHTML=(response.data.condition.description);
let degree= document.querySelector(".coordinates");
degree.innerHTML=Math.round(response.data.coordinates.longitude)+ "°C/ " + Math.round(response.data.coordinates.latitude)+"°C feel like"+ Math.round(response.data.temperature.feels_like)+ "°C" ;
//let icon= document.querySelector(".weatherIcon");
//icon.innerHTML=(response.data.condition.icon_url)
console.log(response.data);
});
}
let form =document.querySelector("form");
form.addEventListener("submit", search);
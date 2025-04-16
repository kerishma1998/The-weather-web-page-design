let now= new Date();
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
let day= days[now.getDay()];
let date=now.getDate();
let month=months[now.getMonth()];
let year=now.getFullYear();
let hour=now.getHours();
let minute=now.getMinutes();
let p = document.querySelector(".time");
p.innerHTML=`<strong> ${day}, ${date} ${month} ${year} | ${hour}:${minute} </strong>`;
if(minute<10){
    minute=`0${minute}`
}
function Citysearch(city){
    let apiKey = "b999985ba9offfd63488b705a2dctf1f";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metrics`;
axios.get(apiUrl).then(currentWeather);
}
function currentWeather(response) {
    let h2= document.querySelector(".current-temperature-value");
    h2.innerHTML= `${Math.round(response.data.temperature.current)}<sup>°C</sup>`;
    let descrip= document.querySelector(".condition");
    descrip.innerHTML=(response.data.condition.description);
    let degree= document.querySelector(".temFeel");
    degree.innerHTML=" feel like "+ Math.round(response.data.temperature.feels_like)+ "°C" ;
    let icon= document.querySelector(".weatherIcon");
    icon.innerHTML= `<img src="${response.data.condition.icon_url}" class="mainIMG" />`
    
};
function CitySearch(city){
    function formatDay(timestamp) {
        let date= new Date(timestamp * 1000);
        let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"];
        return days[date.getDay()];
      }
    let apiKey = "b999985ba9offfd63488b705a2dctf1f";
    let aPIUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(aPIUrl).then(function forcastWeather(response){
    function forcastHtml(){
        let forcastWeather="";
        response.data.daily.forEach(function(day, index){
            if(index > 0 ) {
             forcastWeather = forcastWeather+ 
            `<li class="fiGure"> <div class="dayOne"> ${formatDay(day.time)}</div>
                   <div class="iconOne"><img src="${day.condition.icon_url}" > </div> 
                   <div class="temOne"> <strong> ${Math.round(day.temperature.minimum)}<sup>°C</sup>/ </strong>  ${Math.round(day.temperature.maximum)}<sup>°C</sup>  </div> <br> <i class="fa-solid fa-wind"></i>Wind 
                   <span class="rainConOne">${Math.round(day.wind.speed)}</span>km/h 
             </li>`
             let degree= document.querySelector(".coordinates");
    degree.innerHTML=`<strong> ${Math.round(day.temperature.minimum)}<sup>°C</sup>/ </strong>  ${Math.round(day.temperature.maximum)}<sup>°C</sup>` ;
             let Wind= document.querySelector("#Windspeed");
             Wind.innerHTML=`${Math.round(day.wind.speed)}`;
             let Humidity= document.querySelector("#Humidity");
             Humidity.innerHTML= Math.round(day.temperature.humidity)
            };
        });
        let dailyForcast= document.querySelector(".dailyWeather")
    dailyForcast.innerHTML= forcastWeather;
    };
    forcastHtml();
   
});
}

    

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
h2.innerHTML= `${Math.round(response.data.temperature.current)}<sup>°C</sup>`;
let descrip= document.querySelector(".condition");
descrip.innerHTML=(response.data.condition.description);
let degree= document.querySelector(".coordinates");
degree.innerHTML=" feel like "+ Math.round(response.data.temperature.feels_like)+ "°C" ;
let icon= document.querySelector(".weatherIcon");
icon.innerHTML= `<img src="${response.data.condition.icon_url}" class="mainIMG" />`
});
function formatDay(timestamp) {
  let date= new Date(timestamp * 1000);
  let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"];
  return days[date.getDay()];
}

let aPIUrl=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios.get(aPIUrl).then(function forcastWeather(response){
    function forcastHtml(){
        let forcastWeather="";
        response.data.daily.forEach(function(day, index){
            if(index > 0 ) {
             forcastWeather = forcastWeather+ 
            `
            <li class="fiGure"> <div class="dayOne"> ${formatDay(day.time)}</div>
                   <div class="iconOne"><img src="${day.condition.icon_url}" > </div> 
                   <div class="temOne"> <strong> ${Math.round(day.temperature.minimum)}<sup>°C</sup>/ </strong>  ${Math.round(day.temperature.maximum)}<sup>°C</sup>  </div> <br> <i class="fa-solid fa-wind"></i>Wind 
                   <span class="rainConOne">${Math.round(day.wind.speed)}</span>km/h 
             </li>`
            };
            let degree= document.querySelector(".coordinates");
    degree.innerHTML=`<strong> ${Math.round(day.temperature.minimum)}<sup>°C</sup>/ </strong>  ${Math.round(day.temperature.maximum)}<sup>°C</sup>` ;
            let Wind= document.querySelector("#Windspeed");
    Wind.innerHTML=`${Math.round(day.wind.speed)}`;
            let Humidity= document.querySelector("#Humidity");
    Humidity.innerHTML= Math.round(day.temperature.humidity)
   
        });
        let dailyForcast= document.querySelector(".dailyWeather")
    dailyForcast.innerHTML= forcastWeather;
    };
    forcastHtml();
   
});
}
let form =document.querySelector("form");
form.addEventListener("submit", search);
Citysearch("Kabul");
CitySearch("Kabul");
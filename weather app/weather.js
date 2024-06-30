const weatherapikey = "b2416074ac6833cf09c288fd7f5e4897";
 const errorNotFound = document.querySelector(".not-found1")
 let container = document.querySelector(".container")
    
const searchBar = function(){
 let searchbar = document.querySelector(".search-box input");
 let searchbtn = document.querySelector(".btn-search");
searchbtn.addEventListener("click", async function(e){
    const searchValue = searchbar.value;
    if(!searchValue) return;
    const resposne =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${weatherapikey}`) ;
    let res2 = await resposne.json();
    if(resposne.status === 200) showWeatherDATA(res2);
    else error404();
   
});

};


const error404 = function(){
  
    container.style.height = "400px";
    errorNotFound.style.display = "block";
    errorNotFound.classList.add("fadeIn");
   };


   const showWeatherDATA = function(weatherdata){
    disableErrorBox();
    const weatherBox = document.querySelector(".weather-box");
    const temperature = document.querySelector(".temperature");
    const description = document.querySelector(".description");
    const weatherDetails = document.querySelector(".weather-details");
    const humidityOfweather = document.querySelector(".humidity span");
    const windSpeed = document.querySelector(".wind span");
    const weatherBoxImage = document.querySelector(".weather-box img")
    const weatherCondition = weatherdata.weather[0].main;
    const weatherdescrip =  weatherdata.weather[0].description;
       

    if (weatherCondition === "Haze") {
      weatherBoxImage.src = "./images/mist.png";
    } else if (weatherCondition === "Rain") {
      weatherBoxImage.src = "./images/rain.png";
    } else if (weatherCondition === "Snow") {
      weatherBoxImage.src = "./images/snow.png";
    } else if (weatherCondition === "Clear") {
      weatherBoxImage.src = "./images/clear.png";
    } else if (weatherCondition === "Clouds") {
      weatherBoxImage.src = "./images/cloud.png";
    }  else if (weatherCondition === "Drizzle"){
        weatherBoxImage.src = "./images/drizzle.jpeg";
    } else if (weatherCondition === "Smoke"){
      weatherBoxImage.src = "./images/smoke.jpeg";}
       
         

      container.style.height = "580px";
      weatherBox.style.display = "block";
      weatherBox.classList.add ("fadeIn");
      weatherDetails.classList.add ("fadeIn");


      const { humidity , temp } = weatherdata.main;
      const {speed} = weatherdata.wind;

      description.textContent = weatherdescrip;
      temperature.textContent = `${celcius(temp)} C`;
      humidityOfweather.textContent = humidity;
      windSpeed.textContent = speed;
   };


   const disableErrorBox = function () {
    errorNotFound.style.display = "none";
   errorNotFound.classList.remove("fadeIn");
  };
  function celcius (kelvin){ 
    const celsiustemperature = kelvin - 273;
    return celsiustemperature.toFixed(2);

  };




 (function init(){
   searchBar();
 })();
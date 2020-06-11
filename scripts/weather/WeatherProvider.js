
let weather=[]

const eventHub = document.querySelector(".weathercontainer")

const getWeather = (lat,long) => { 
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely&units=imperial&appid=${keys.weatherKey}`)
    .then((response) => response.json())
      .then((parsedWeather) => {
        weather = parsedWeather
        return weather
      })
     .then((weather)=>{
         console.log(weather)
        //  const previewWeatherElement = document.querySelector(".weathercontainer")

        // const clearWeatherPreview = () => previewWeatherElement.innerHTML = ""

        // clearWeatherPreview();
         weatherList(weather)
     })
  }

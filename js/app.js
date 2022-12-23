//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//b99cf01a434e017322032f1a9c75cff5
//https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=b99cf01a434e017322032f1a9c75cff5

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b99cf01a434e017322032f1a9c75cff5`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            loc.textContent = `${data.name}, ${data.sys.country}`;
            temp.textContent = (data.main.temp - 273.15).toFixed(0) + 'C';
            wind.textContent = data.wind.speed + "m/s";
            humidity.textContent = data.main.humidity + "%";
        })
}

const loc = document.getElementById("location");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const city = document.getElementById("city");
const btn = document.getElementById("btn");


getWeather("Chisinau")

btn.addEventListener("click", () => {
    getWeather(city.value)
})

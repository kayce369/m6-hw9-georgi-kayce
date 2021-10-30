var weather = document.getElementById('weather')
var input = document.querySelector('input')
var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    var query = input.value
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=4cbd70ae761a905f9d6ea3b3c536fa12')
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        console.log(result)
        renderWeather(result)
    })
}

function renderWeather(weatherObj) {
    weather.innerHTML = ""

    var city = document.createElement('h2')
    city.textContent = weatherObj.name + ', ' + weatherObj.sys.country
    weather.appendChild(city)

    var current = document.createElement('h3')
    current.textContent = weatherObj.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    weather.appendChild(current)

    var picture = document.createElement('img')
    picture.src = 'http://openweathermap.org/img/w/' + weatherObj.weather[0].icon +'.png'
    picture.alt = weatherObj.weather[0].description + ' icon'
    weather.appendChild(picture)
}
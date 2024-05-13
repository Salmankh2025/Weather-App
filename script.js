var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityinput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "03a610bf0e8779f8021f69f280022aa1"

function convertion(val){
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data=>{
        var nameval = data['name']
        var descrip = data['weather'] ['0'] ['description']
        var temperature = data['main'] ['temp']
        var wndspeed = data['wind'] ['speed']


        city.innerHTML = `Weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</s`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML = `wind speed: <span>${wndspeed} km/h<span`

        



    })
    .catch(err=> alert('you enter wrong city name'))

})
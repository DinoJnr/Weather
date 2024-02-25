async function getDataValue(){
    let long = document.getElementById("longitude")
    let lati = document.getElementById("latitude")
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position.coords.latitude)
                lati.innerHTML = JSON.stringify("Latitude:" +position.coords.latitude)
                long.innerHTML = JSON.stringify("Longitude:"+position.coords.longitude);
            }
        )
}
async function getCity(){
    let cityName = document.getElementById("login").value;
    let cityTempo = document.getElementById("temperature");
    let cityPressure = document.getElementById("pressure")
    let cityHumdity = document.getElementById("humidity")
    let country = document.getElementById("country")
    let townName = document.getElementById("town")

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=80b833690e8542ee89d8f5b9bd05aa04`;
    const response = await fetch(url);
    const getResponse = await response.json();
    cityTempo.innerHTML = JSON.stringify(`${Math.round(getResponse.main.temp-273)} °c `);
    cityPressure.innerHTML = JSON.stringify("Pressure: " +getResponse.main.pressure);
    cityHumdity.innerHTML = JSON.stringify("Humidity: " +getResponse.main.humidity +"%");
    long.innerHTML = JSON.stringify("Longitude: "+ getResponse.coord.lon);
    lati.innerHTML = JSON.stringify("Latitude: " +getResponse.coord.lat);
    country.innerHTML = JSON.stringify("Country: " +getResponse.sys.country);
    townName.innerHTML = JSON.stringify(getResponse.name);
    console.log(getResponse);
}
const ciudad = document.getElementById("ciudad");
const fotoCielo = document.getElementById("fotoCielo");
const temperatura = document.getElementById("temperatura");
const cielo = document.getElementById("cielo");
const mensaje = document.getElementById("mensaje")

//Utilizo una api que me da el clima para alentar al cliente a comer su postre favorito sin importar el clima.Siempre es un buen momento!
async function obtenerClima(){
    const URLGETCLIMA = "https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=ceb1ffc690c9c70fd36175449bbc7d06";
    const respuestaClima = await fetch(URLGETCLIMA);
    const dataClima = await respuestaClima.json();
    //Paso la temperatura desde Kelvin a grados celcius
    const temp = parseFloat((dataClima.main.temp - 273.15)).toFixed(1) +" °C";
    const lugar = dataClima.name;
    const cieloDescripcion = dataClima.weather[0].main;

    ciudad.innerText = lugar;

    //Son todas las opciones que me ofrece la api menos la nieve porque estamos en argentina
    if(cieloDescripcion == "Clear"){
        fotoCielo.src="https://openweathermap.org/img/wn/01d@2x.png"
        temperatura.innerText = temp
        cielo.innerText = "Despejado"
        mensaje.innerText = "Qué mejor que disfrutar de tu postre favorito con este dia hermoso!"
    }
    else if(cieloDescripcion == "Thunderstorm"){
        fotoCielo.src="https://openweathermap.org/img/wn/11d@2x.png"
        temperatura.innerText = temp
        cielo.innerText = "Tormenta"
        mensaje.innerText = "Al mal tiempo, aprovecha a disfrutar tu postre favorito en casa!"
    }
    else if(cieloDescripcion == "Drizzle"){
        fotoCielo.src="https://openweathermap.org/img/wn/09d@2x.png"
        temperatura.innerText = temp
        cielo.innerText = "Llovisna"
        mensaje.innerText = "Que esta pequeña lluvia no te impida comer tu postre favorito!"
    }
    else if(cieloDescripcion == "Rain"){
        fotoCielo.src="https://openweathermap.org/img/wn/10d@2x.png"
        temperatura.innerText = temp
        cielo.innerText = "Lluvia"
        mensaje.innerText = "Quedate en casa comiendo el postre que más te gusta mirando la lluvia!"
    }
    else if(cieloDescripcion == "Clouds"){
        fotoCielo.src="https://openweathermap.org/img/wn/04d@2x.png"
        temperatura.innerText = temp
        cielo.innerText = "Nubes"
        mensaje.innerText = "Al mal tiempo, aprovecha a disfrutar tu postre favorito en casa!"
    }
    else{
        mensaje.innerText= "error"
    }
}

obtenerClima();
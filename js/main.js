/*reloj*/
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    
    //agregar rotacion a los elementos

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
    seconds.style.transition = `.2s`
}

setInterval(clock, 1000) //1000 = 1 segundo

const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
    //   dateWeek = document.getElementById('date-day-week'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        // dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()

    // cambiar el horario de 24 a 12hs y establecer si es AM o PM
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }

    // cuando son las 00, se pasa a las 12
    if(hh == 0){hh = 12}

    // si es antes de las 10, se pone un 0 adelante
    if(hh < 10){hh = `0${hh}`}

    // se muestra el tiempo en horas
    textHour.innerHTML = `${hh}:`
    
    // si los minutos son menores a 10, se pone un 0 adelante
    if(mm < 10){mm = `0${mm}`}
    
    // se muestran los minutos
    textMinutes.innerHTML = mm

    // muestra si es am o pm 
    textAmPm.innerHTML = ampm

    // array de meses
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // mostrar el dia, el mes y el año
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s

//cambiar tema entre dark y light//

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtener cual es el tema en el que esta la pagina en ese momento
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// validamos que el usuario selecciono un tema
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// activar o desactivar el tema tocando el boton de la luna
themeButton.addEventListener('click', () => {
    // agregar o eliminar el boton 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // guardamos en el local storage el tema que quedo seleccionado por el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// const fetchData = fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany&appid=c54fa6bb96bcf3b2ce4b03893a95c5ae')

const apiKey = 'c54fa6bb96bcf3b2ce4b03893a95c5ae'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const city = document.querySelector('#searchIn');

const img = document.querySelector('.condition')
document.querySelector('.btn')
    .addEventListener('click', () => {
        wheather(city.value);
    })

async function wheather(city) {
    
    const fetchUrl = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (fetchUrl.status == 404) {

        document.querySelector('.invalid').style.display = 'block';
        document.querySelector('.wheather').style.opacity = 0;

    }
    else {
        document.querySelector('.invalid').style.display = 'none';
        const data = await fetchUrl.json();
        document.querySelector('.temp').textContent = Math.floor(data.main.temp) + '°c';
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.humidityText').textContent = data.main.humidity + '%';
        document.querySelector('.windText').textContent = data.wind.speed + 'km/h';

        if (data.weather) {
            switch (data.weather[0].main) {
                case 'Clear':
                    img.src = 'images/clear.png';
                    break;
                case 'Clouds':
                    img.src = 'images/clouds.png'
                    break;
                case 'Drizzle':
                    img.src = 'images/drizzle.png'
                    break;
                case 'Mist':
                    img.src = 'images/mist.png'
                    break;
                case 'Rain':
                    img.src = 'images/rain.png'
                    break;
                case 'Snow':
                    img.src = 'images/snow.png'
                    break;
                default:
                    break;
            }
        }
        document.querySelector('.wheather').style.opacity = 1;
    }
}

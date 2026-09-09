import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import './App.css'
import dayImg from './assets/day.svg'
import nightImg from './assets/night.svg'
import stormyImg from './assets/stormy.svg'
import cloudyDayImg from './assets/cloudy-day.svg'
import cloudyNightImg from './assets/cloudy-night.svg'

function App() {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: dayImg,
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: nightImg,
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: stormyImg,
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: cloudyDayImg,
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: cloudyNightImg,
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>

      <section>
        {weatherForecasts.map((forecast) => {
          return (
            <WeatherForecast
              key={forecast.day}
              {...forecast}
            />
          );
        })}
      </section>
    </>
  );
}

export default App

import React, { useState, useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const API_KEY = 'b05a9e20251c6a5c2338fd74d36d0c52';

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Erro ao buscar dados meteorológicos:', error);
    }
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserLocation({ latitude, longitude });
        }, (error) => {
          console.error('Erro ao obter localização do usuário:', error);
        });
      } else {
        console.error('Geolocalização não suportada pelo navegador.');
      }
    };

    const intervalId = setInterval(updateCurrentTime, 1000);
    getUserLocation();

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchWeatherData(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  return (
    <div className='about-page' id='aboutUs'>
      <div className='aboutcontainer'>
        <div className='header-content'>
          <h1 className='about-page-title text-green'>Who are we?</h1>
          <p className='about-page-description'>
            Our job is to provide basic information about all living snake families and species, such as boas, cobras, vipers and colubrids, all of this in a simple and accessible way for people of any level of education, because although we work with these magnificent creatures, it is necessary to recognize that snakebites are a cruel reality in many parts of the world.
          </p>
          {weatherData && (
            <div className='weather-info'>
              <p>City: {weatherData.name}</p>
              <p>Country: {weatherData.sys.country}</p>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Condition: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
              <p>Current time: {currentTime}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
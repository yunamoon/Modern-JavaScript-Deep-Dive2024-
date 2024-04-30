import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Weather.css'
import Button from '../button/Button';

import { WiHumidity, WiStrongWind } from 'react-icons/wi'

const Weather = () => {

    // 선언
    const contentRef = useRef();
    const [location , setLocation] = useState('');
    const [weatherData , setWeatherData] = useState({
            location : "",
            icon : "",
            humidity : "",
            temp : "",
            wind : "",
        }
    );
   

    // 날씨 정보 
    const getWeather = async (lat, lon) => {

        const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lon=kr&appid=${weather_api_key}&units=metric`;
       
        if(lat, lon) {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`
        } 
       
        try {
            let response = await axios.get(url);
            let data = response.data;
            setWeatherData({
                location : data.name, 
                icon : `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                humidity : data.main.humidity, 
                temp : data.main.temp,
                wind : data.wind.speed,
            });
        } catch (error) {
            console.log('에러 발생' , error);
        }
    };

    // 검색 핸들러
    const handleSearch = () => {
        if(location === "") {
            contentRef.current.focus();
            return;
        } 
        getWeather();
    };

    // input 핸들러
    const handleInput = (e) => {
        setLocation(e.target.value);
    };

   // input 엔터 처리
    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            getWeather();
        }
      };

    // 마운트 시, 현재 위치 날씨 정보
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position)=> {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
           getWeather(lat, lon);
        })
    }, [location]);

    if(!weatherData.temp) {
        return   <div className='Weather'> 로딩 중입니다...!</div>
    }

    return (
    <div className='Weather'>
        <div className='search-bar'>
            <input className='search-input' 
            placeholder='원하는 도시를 검색하세요. 🥰' 
            ref={contentRef}
            onChange={handleInput}
            onKeyUp={onKeydown} />
            <Button  
            onClick={handleSearch} 
            text={'검색'}
            id={3}
            />
        </div>

        <img className='weather-logo' src={weatherData.icon} alt='logo'/>
        <h2 className='weather-temp'>{weatherData.temp}℃</h2>
        <h3 className='weather-location'>{weatherData.location}</h3>
      
        <div className='weather-data'>            
            <div className='element'>
                <WiHumidity className='icon' size={80}/>
                <div className='data'>
                    <div className='humidity'>{weatherData.humidity}%</div>
                    <div className='label'>습도</div>
                </div>
            </div>

            <div className='element'>
               <WiStrongWind className='icon' size={80}/>
                <div className='data'>
                    <div className='wind'>{weatherData.wind} km/h</div>
                    <div className='label'>풍속</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Weather
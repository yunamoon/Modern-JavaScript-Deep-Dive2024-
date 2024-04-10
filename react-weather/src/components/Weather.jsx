import { useRef, useState } from 'react';
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import search from '../assets/search.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import './Weather.css'

const Weather = () => {
    const [location , setLocation] = useState('');
    const contentRef = useRef();

    const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lon=kr&appid=${weather_api_key}&units=metric`
    
    const handleSearch = async () => {
        if(location === "") {
            contentRef.current.focus();
            return;
        } 
            let response = await fetch(url);
            let data = await response.json();
            console.log('데이타' , data);
        
    };

    const handleInput = (e) => {
        setLocation(e.target.value);
    };

    return (
    <div className='container'>
        <div className='search-bar'>
            <input className='search-input' 
            placeholder='원하는 도시를 검색하세요.' 
            ref={contentRef}
            onChange={handleInput} />
            <div className='search-icon' onClick={handleSearch}>
                <img src={search} alt='search-icon'></img>
            </div>
        </div>

        <div className='weather-logo'>
            <img src={cloud} alt='cloud-logo'/>
        </div>
       
        <div className='weather-temp'>24℃</div>
       
        <div className='weather-location'>London</div>
      
        <div className='weather-data'>
            
            <div className='element'>
                <img src={humidity} alt='' className='icon'/>
                <div className='data'>
                    <div className='humidity'>100%</div>
                    <div className='label'>습도</div>
                </div>
            </div>

            <div className='element'>
                <img src={wind} alt='' className='icon'/>
                <div className='data'>
                    <div className='wind'>100 km/h</div>
                    <div className='label'>풍속</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Weather
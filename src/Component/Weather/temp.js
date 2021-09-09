import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './WeatherCard';
const Temp = () => {
    const [searchValue, setSearchValue] = useState("Nagpur");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=bcb44b51157308a6c457b79b6e04cf08`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const { temp, humidity, pressure } = data.main;
            const { main:weathermood } = data.weather['0'];
            const { name } = data;
            const { speed } = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset,
            }
            setTempInfo(myNewWeatherInfo);
        } catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    },[]) // [] only runs on page refresh

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" name="search" id="search" className="searchTerm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="search..." />
                    <button className="searchButton" type="button" onClick={() => getWeatherInfo()}>Search</button>
                </div>
            </div> 
            <WeatherCard data={tempInfo}/>
        </>
    )
}

export default Temp;

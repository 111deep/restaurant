import React, { useEffect } from 'react';
// https://erikflowers.github.io/weather-icons/
const WeatherCard = ({data}) => {
    const [weatherState, setWeatherMood] = React.useState("");
    const {temp, humidity, pressure, weathermood, name, speed, country, sunset} = data;

    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setWeatherMood('wi-day-cloudy');
                    break;
                case "Haze":
                    setWeatherMood('wi-fog');
                    break;
                case "Clear":
                    setWeatherMood('wi-day-Sunny');
                    break;
                case "Mist":
                    setWeatherMood('wi-dust');
                    break;
                default:
                    setWeatherMood('wi-day-Sunny');
                    break;
            }
        }
    }, [weathermood])
    let sec = sunset;
    let date = new Date(sec*1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            <span>{weathermood}</span>
                        </div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timestr}<br />Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">{humidity}<br />Humidity</p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{pressure}<br />Pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed}<br />Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default WeatherCard;

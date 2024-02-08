import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city:'Delhi',
        feelslike:24.3,
        temp:25.05,
        tempMin:23,
        tempMax:56,
        humidity:22,
        weather:"haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
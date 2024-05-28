import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather(){
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] =useState(null);

    async function fetchWeatherData(param){
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=3fb2a2b79b0555e36a6dd372db7ffb47`
            );

            const data = await response.json();
            if(data) {
                setWeatherData(data)
                setLoading(false)
            }
        }catch(e){
            setLoading(false)
            console.log(e);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search); 
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

    useEffect(() => {
        fetchWeatherData('Boolaroo');
      }, []);
    
      console.log(weatherData);

    return <div>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />
        {
            loading ? <div>Loading...</div> :
            <div>
                <div className="city-name">
                    <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                </div>
                <div className="date">
                    <span>{getCurrentDate()}</span>
                </div>
                <div>{weatherData?.main?.temp}</div>
                <p className="description">
                    {weatherData && weatherData[0] ? weatherData[0].description : ''}
                </p>
            </div>

        }
    </div>
}

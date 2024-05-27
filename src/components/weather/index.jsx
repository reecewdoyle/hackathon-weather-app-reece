import { useState } from "react";
import Search from "../search";


export default function Weather(){
    const [search, setSearch] = useState('');
    // const [loading, setLoading] = useState(false);
    // const [weatherData, setWeatherData] =useState(null);

    async function handleSearch() {}

    return <div>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        />
        Weather
    </div>
}

// 5:29:54 is where I got up to in the video 
// https://www.youtube.com/watch?v=5ZdHfJVAY-s
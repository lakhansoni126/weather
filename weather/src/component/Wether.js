import React, { useEffect, useState } from "react";
import "./css/style.css" ;
const Wether = () => {

    const [ city , setCity ] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect( () =>{
        const fetchApi =async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=325483a58e7eaa42c3a86a8b71f12d5c`
            const response = await fetch(url);
            const resJson= await response.json();
            setCity(resJson.main); 
        }
            fetchApi();
    },[search, setSearch])
    
    return (
        <>
         <div className="box">
                <div className="inputData">
                    <input type="search"
                    value={search}
                        className="inputFeild"
                        onChange={(event) => { setSearch(event.target.value); } } />
                </div>

            { !city ? (
                <p className="errorMsg" >No Data found</p>
            ) : (
            <div>
                <div className="info">
                    <h2 className="location">
                    <i class="fa-sharp fa-solid fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°C
                    </h1>
                    <h3 className="tempmin_max">Min :  {city.temp_min}°C | Max :  {city.temp_max}°C</h3>
                </div>
                    
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                
            </div> )}

                 
            </div>
        </>

    );

}

export default Wether;
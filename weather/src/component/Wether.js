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
             <>   
            const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
 
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
</>
                 
            </div>
        </>
-
    );

}

export default Wether;
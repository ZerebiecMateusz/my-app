import React from 'react';

const Result = ( props ) => {

    const {err, city, date, sunrise, sunset, temp, pressure, wind} = props.weather
    let content = null;

    if (!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
                <h3>Wyszukiwanie dla miasta: <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Wschód słonca dziś o: {sunriseTime}</h4>
                <h4>Zachód słońca dziś o: {sunsetTime}</h4>
                <h4>Ciśnienie: {pressure}hPa</h4>
                <h4>Siła i kierunek wiatru: siła {wind.speed} [m/s] kąt:{wind.deg}deg</h4>
            </div>
        )
    }

    return ( 
        <div className='result'>
            {err ? `nie mamy w bazie ${city}` : content}
        </div>
    // <>  
    //     <div>Pogoda dla: {city} </div>
    //     <div>data: {date}</div>
    // </>  
     );
}
 
export default Result;
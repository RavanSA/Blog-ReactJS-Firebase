import React,{Component} from "react";
import {useEffect,useState} from "react";
import {REACT_APP_API_KEY,REACT_APP_API_URL} from "./WeatherAPIVar";
import WeatherCard from "./WeatherCard";

function Weather() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            await fetch(REACT_APP_API_URL+"/weather/?lat="+lat+"&lon="+long+"&units=metric&APPID="+REACT_APP_API_KEY)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                });
        }
         fetchData();
    }, [lat,long])

    return(
      <div>
          {(typeof data.main != 'undefined') ? (
              <WeatherCard weather={data}/>
          ): (
              <div></div>
          )}
      </div>
    );
    }

export default Weather;
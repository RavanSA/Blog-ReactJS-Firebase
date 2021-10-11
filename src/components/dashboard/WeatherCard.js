import React from "react";
import {CardContainer,Card,
        WeatherCityName,
        WeatherImage,
        WeatherDetail} from "../Blogs/CardDesign";


const WeatherCard = ({weather}) => {
    console.log("WEATHER",weather)
    return(
      <>
          <CardContainer>
              <Card >
                  <WeatherCityName>
                  <p>{weather.name}</p>
                  <WeatherImage src={"http://openweathermap.org/img/w/"+ weather.weather[0].icon +".png"} />
                    </WeatherCityName>
                  <WeatherDetail>
              <p>Temprature: {weather.main.temp} °</p>
              <p>{weather.weather[0].description}</p>
              </WeatherDetail>
              </Card>
          </CardContainer>
      </>
    );
}

export default WeatherCard;
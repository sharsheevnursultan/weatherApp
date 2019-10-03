import React from "react";
import './Weather.css'

const Weather = (props) => (
    <div>
        <div>
            {props.city && props.country && <h4> Город: <span>{props.city}, {props.country}</span></h4>}
            {props.temperature && <h4> Температура: <span>{props.temperature}</span> °C</h4>}
            {props.humidity && <h4> Влажность: <span>{props.humidity} %</span></h4>}
            {props.speed && <h4> Ветер: <span>{props.speed}</span> м/с</h4>}
            {props.sunrise && <h4> Восход: <span>{props.sunrise}</span></h4>}
            {props.sunset && <h4> Закат: <span>{props.sunset}</span></h4>}
            {props.notFoundCode && <h4> Код ошибки: <span>{props.notFoundCode}</span>  </h4>}
            {props.notFoundMessage && <h4> <span>{props.notFoundMessage}</span></h4>}
            {props.error && <h4> <div>{props.error}</div></h4>}
        </div>
        <div>
            {props.weatherIcon && <h4><span><img src={'http://openweathermap.org/img/w/' + props.weatherIcon + '.png'} alt={props.description}/></span></h4>}
        </div>
    </div>
);

export default Weather;
import React from "react";
import Form from "./Form";
import Weather from "./Weather";
import './App.css'

const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=abacceaec861b12e6d69c3f60c510584";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        weatherIcon: undefined,
        sunset: undefined,
        sunrise: undefined,
        error: undefined,
        notFoundCode: undefined,
        notFoundMessage: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        try {
            const api_call = await fetch(`${URL}+${city}+${API_KEY}&units=metric`);
            const weatherData = await api_call.json();
            console.log(weatherData);
            console.log(weatherData.name);
            console.log(weatherData.cod);
            if (city) {
                let sunset = weatherData.sys.sunset*1000;
                let date = new Date();
                date.setTime(sunset);
                let sunsetDate = date.getHours() + ':' + date.getMinutes();

                let sunrise = weatherData.sys.sunrise*1000;
                let date2 = new Date();
                date2.setTime(sunrise);
                let sunriseDate = date2.getHours() + ':' + date2.getMinutes();

                this.setState({
                    temperature: weatherData.main.temp,
                    city: weatherData.name,
                    country: weatherData.sys.country,
                    humidity: weatherData.main.humidity,
                    speed: weatherData.wind.speed,
                    description: weatherData.weather[0].description,
                    weatherIcon: weatherData.weather[0].icon,
                    sunset: sunsetDate,
                    sunrise: sunriseDate,
                    error: undefined,
                    notFoundCode: undefined,
                    notFoundMessage: undefined

                });
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    speed: undefined,
                    description: undefined,
                    weatherIcon: undefined,
                    sunset: undefined,
                    sunrise: undefined,
                    error: "Введите название города",
                    notFoundCode: undefined,
                    notFoundMessage: undefined
                });
            }

        } catch {
            const api_call = await fetch(`${URL}+${city}+${API_KEY}&units=metric`);
            const weatherData = await api_call.json();
            console.log(weatherData);
            console.log(weatherData.name);
            // document.write(weatherData.cod);
            // document.write(weatherData.message );
            if (city) {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    speed: undefined,
                    description: undefined,
                    weatherIcon: undefined,
                    sunset: undefined,
                    sunrise: undefined,
                    error: "Город не найден",
                    notFoundCode: weatherData.cod,
                    notFoundMessage: weatherData.message
                });
            } else {
                this.setState({
                    notFoundCode: undefined,
                    error: "Введите название города",
                    notFoundMessage: undefined
                });
            }
        }

    };

    render() {

        return (
            <div className='centering'>
            <h1>Weather App</h1>
        <Form getWeather={this.getWeather}/>
        <Weather
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        weatherIcon={this.state.weatherIcon}
        sunset={this.state.sunset}
        sunrise={this.state.sunrise}
        speed={this.state.speed}
        error={this.state.error}
        notFoundCode={this.state.notFoundCode}
        notFoundMessage={this.state.notFoundMessage}
        />


        </div>
    );


    }
}

export default App;
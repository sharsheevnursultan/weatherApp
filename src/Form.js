import React from "react";



const Form = props => (
    <div className='centering'>
        <form  onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Город"  title="Название города с заглавной буквы на английском"/>
            <input type="submit" value='Найти'/>
        </form>
    </div>
);

export default Form;
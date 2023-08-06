import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather'
const API_KEY="a9faa4cb2a9fdebdb6d6bebdc10a8146";

class App extends Component {
  state={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getWeather= async(e)=>{
e.preventDefault();
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;

const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country},&appid=${API_KEY}`)
const data =await api.json();  
if(city&&country){
  this.setState({
    temperature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
  })
}
else{
  this.setState({
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'please enter data'
  })
}
}
  render(){
  return (
    <div className="App">
Weather App
<Form getWeather={this.getWeather}/>
<Weather  temperature= {this.state.temperature}
    city={this.state.city}

    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
/>
<img src='https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=600' className='img'/>
    </div>
  );
}

}

export default App;
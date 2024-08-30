import React from 'react'
import './Weather.css'
import axios from 'axios'
import {useState} from 'react'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
import {API_KEY} from '../Constants/Constants'
function Weather() {
  const [weather,setWeather]=useState('')
   const [data,setData]=useState([])
 
  const submit=()=>{
    try {
      const location=weather;
      axios.get(`//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
      .then((response)=>{
        setData(response?.data)
        console.log(response.data)
        
      })
      
    } catch (error) {
      console.log(error)
    }

  }
  
  
  return (
    <div className='weather'>
     <div className='search-bar'>
     <input type='text'onChange={(e)=>{setWeather(e.target.value)}} placeholder='Search'/>
     <img src={search_icon} onClick={submit}  alt=''/>
    
     </div>
   
     <img src={clear_icon} alt='' className='weather-icon'/>
     <p className='temperature'>{data?.main?.temp?data.main.temp:0}</p>
     <p className='location'>{data?.name}({data?.sys?.country})</p>
     <div className='weather-data'>
     <div className='col'>
      <img src={humidity_icon} alt=''/>
      <div>
        <p>{data?.main?.humidity}</p>
        <span>Humidity</span>
      </div>
     </div>
     <div className='col'>
      <img src={wind_icon} alt=''/>
      <div>
        <p>{data?.wind?.speed} Km/h</p>
        <span>Wind Speed</span>
      </div>
     </div>
     
     </div>
     
   
    
    </div>
  )
}

export default Weather
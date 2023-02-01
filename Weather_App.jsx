import React  from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";
import axios from "axios";
import "./weatherapp.css";

const Weather_App = () => {

    const apiKey = "f56f24967aaf51182d1d4df628297c6d"

    const [data, setData] = useState({});
    const [inputCity, setInputCity] = useState("");
    const getWeatherDetails = (cityName) =>{
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="+apiKey
        axios.get(apiUrl).then((res)=>{
            console.log("response", res)
        }).catch((err) => {
            console.log('err', err)
        })
    }
    const handleChangeInput = (e) => {
        console.log("value", e.target.value)
        setInputCity(e.target.value);

    }
    const handleSearch = () =>{
        getWeatherDetails();
    }

    useEffect(() => {
      getWeatherDetails("inputCity")
    }, []);
  return (
<div className="col-md-12">
    <div className="weatherbg">
        <h1>Weather</h1>
        <div className='d-grid gap-3 col-4 mt-4'>
        <input type="text" className="form-control" value = {inputCity} onChange={handleChangeInput}/>
     <button className='btn btn-primary' type ="button" onClick={handleSearch }>Search</button>
     </div>
    </div>
    <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded wetherResultBox'>
            <img  src='https://cdn-icons-png.flaticon.com/512/1779/1779940.png'/>
            <h5 className="h5">Delhi</h5>
            <h5 className="h5">18.05C</h5>


        </div>
    </div>
</div>
  )
}

export default Weather_App
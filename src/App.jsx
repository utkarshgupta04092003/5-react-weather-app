import React, { useEffect, useState } from 'react'
import Weather from './components/Weather';
import { REACT_APP_API_ID } from '../utils';
import Location from './components/Location';
import ByCityName from './components/ByCityName';



export default function App() {

  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const [cityName, setCityName] = useState('London');

  useEffect(() => {


    const fetchData = ()=>{

      
      fetch(`${BASE_API_URL}?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_ID}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result);
      });
    }
    fetchData();

  }, [lat, lon]);


  useEffect(() => {

    const fetchData = ()=>{

      fetch(`${BASE_API_URL}?q=${cityName}&appid=${REACT_APP_API_ID}`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setData(result); 
      })
      .catch(err => console.log('error in fetching: ', err));
    }
    fetchData();
    
  }, [cityName]);

  const changeCityName = (val) => setCityName(val)

  const setLocation = (lat, lon)=>{
    setLat(lat);
    setLon(lon);
    console.log('set location is working fine.')
  }

  return data && data.length == 0 ? <h1>Loading...</h1> : (

    <div>

      {data.cod == 404 ? 'code': 'not'}

      <div className='font-bold text-2xl text-red-500'>
        App js
      </div>

      <ByCityName cityName={cityName} setCityName={setCityName} changeCityName={changeCityName}/>

      <Location setLocation={setLocation} />


      <Weather data={data} />
    </div>
  )
}

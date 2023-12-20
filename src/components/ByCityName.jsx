import React, { useState } from 'react'

export default function ByCityName({cityName, setCityName, changeCityName}) {


    const [city, setCity] = useState(cityName);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        changeCityName(city);
    }
  return (
    <div className='border border-gray-500'>

        <form onSubmit={handleSubmit}>

            <label htmlFor="cityName">Enter City Name: </label>

            <input type="text" 
            value={city}
            onChange={(e)=>setCity(e.target.value)}
             />


            <button type='submit'>Submit</button>


        </form>
      
    </div>
  )
}

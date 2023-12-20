import React from 'react'

export default function Weather({data}) {
  return (data.cod == '404') ? (
    <div className='text-red-500 font-bold text-center text-2xl capitalize'>
      {data.cod} - {data.message}
    </div>
  ) : (
    <div className='border border-gray-500'>



        Latitude - {data.coord.lat} <br />
        Longitude - {data.coord.lon} <br />
        City - {data.name} <br />
        Temp - {data.main.temp} <br />
        Minimum temparture - {data.main.temp_min} <br />
        Maximum temprature - {data.main.temp_max} <br />
        Pressure - {data.main.pressure} <br />
        Humidity - {data.main.humidity} <br />
        Date - {new Date(data.dt*1000).toLocaleDateString('en-IN')} <br />

    </div>
  )
}

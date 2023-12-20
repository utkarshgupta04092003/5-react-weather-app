import React, { useEffect } from 'react'

export default function Location({setLocation}) {
    
    const handleClick = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);

            setLocation(position.coords.latitude, position.coords.longitude);
            // setLocation(26.85, 80.94);

        })
    }
    
  return (
    <div className='border border-gray-500 flex justify-center'>

        {/* Location.jsx working properly */}
        <button
        className='text-center font-bold cursor-pointer w-full m-2' 
        onClick={handleClick}>Current Location</button>
      
    </div>
  )
}

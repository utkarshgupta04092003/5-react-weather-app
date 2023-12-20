import React, { useState } from 'react';
import Header from './Header';
import { BASE_API_URL } from '../../utils';
import { REACT_APP_API_ID } from '../../utils';
import DisplayCompared from './DisplayCompared';

export default function CompareTwoWeather() {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [isShow, setIsShow] = useState(true);


  const [isLoading, setIsLoading] = useState(false);

  const setData = async () => {
    await fetch(`${BASE_API_URL}?q=${city1}&appid=${REACT_APP_API_ID}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === '400' || result.cod === '404') alert('Something went wrong.');
        setData1(result);
        console.log(result);
      })
      .catch((err) => {
        console.log('error in fetching city1: ', err);
        setData1({});
      });
      
      await fetch(`${BASE_API_URL}?q=${city2}&appid=${REACT_APP_API_ID}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === '400' || result.cod === '404') alert('Something went wrong.');
        setData2(result);
        console.log(result);
      })
      .catch((err) => {
        console.log('error in fetching city2: ', err);
        setData2({});
      });
      // if(data1 && data2)
       setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsShow(true);
    setData();
  };

  return (
    <>
      <Header /> 
    <div className='p-3'>
      <div className="my-4 text-2xl font-bold">Compare Weather Data</div>
      <hr className="my-4" />

      <form onSubmit={handleSubmit} className="flex space-x-4 ">
        <input
          type="text"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          placeholder="Enter City 1"
          className="p-2 border border-gray-300"
        />

        <input
          type="text"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          placeholder="Enter City 2"
          className="p-2 border border-gray-300"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>



      {isLoading ? 'Data is loading...' : 
      (!data1 || !data2 || data1.cod === '404' || data1.cod === '400' || data2.cod === '404' || data2.cod === '400') ?
      (!isShow && <h1 className='text-red-500'>Something went wrong...</h1>) : 
      (
        <DisplayCompared data1={data1} data2={data2} isLoading={isLoading} />
      )
      }

    </div>

    </>
  );
}

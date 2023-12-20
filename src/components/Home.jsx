import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import Location from './Location';
import ByCityName from './ByCityName';
import Header from './Header';
import { REACT_APP_API_ID } from '../../utils';
import { BASE_API_URL } from '../../utils';

export default function Home() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [cityName, setCityName] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      const fetchData = () => {
      fetch(`${BASE_API_URL}?q=${cityName}&appid=${REACT_APP_API_ID}`)
      .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
          setIsLoading(false);
        })
        .catch((err) => console.log('error in fetching: ', err));
    };
    console.log('click city change')
    fetchData();
}, [cityName]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`${BASE_API_URL}?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_ID}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
          setIsLoading(false);
        });
    };
    fetchData();
  }, [lat, lon]);

  const changeCityName = (val) => {
    setIsLoading(true);
    setCityName(val);
  }
  const setLocation = (lat, lon) => {
    setIsLoading(true);

    setLat(lat);
    setLon(lon);
    console.log('set location is working fine.');
  };

  return data && data.length === 0 ? (
    <div>
        <Header/>
        <h1>Loading Data</h1>
    </div>
  ) : (
    <div className="bg-gray-200 min-h-screen">
      <Header />

      <div className="mx-auto max-w-lg p-4 bg-white rounded-md shadow-md">
        <ByCityName cityName={cityName} setCityName={setCityName} changeCityName={changeCityName} />
        <Location setLocation={setLocation} />
        <Weather data={data} isLoading={isLoading}/>
      </div>
    </div>
  );
}

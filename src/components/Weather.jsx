import React from 'react'

export default function Weather({data, isLoading}) {
  return (data.cod == '404' || data.cod == '400') ? (
    <div className='text-red-500 font-bold text-center text-2xl capitalize'>
      {data.cod} - {data.message}
    </div>
  ) : (
    <div>

        {isLoading?'Loading data...': (
          <table className="table-auto border-collapse border border-slate-500 mx-auto w-full">
          <thead>
            <tr>
              <th className="border border-slate-500 p-2">Property</th>
              <th className="border border-slate-500 p-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-500 p-2">Latitude</td>
              <td className="border border-slate-500 p-2">{data.coord.lat}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Longitude</td>
              <td className="border border-slate-500 p-2">{data.coord.lon}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">City</td>
              <td className="border border-slate-500 p-2">{data.name}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Temperature</td>
              <td className="border border-slate-500 p-2">{data.main.temp}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Minimum Temperature</td>
              <td className="border border-slate-500 p-2">{data.main.temp_min}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Maximum Temperature</td>
              <td className="border border-slate-500 p-2">{data.main.temp_max}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Pressure</td>
              <td className="border border-slate-500 p-2">{data.main.pressure}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Humidity</td>
              <td className="border border-slate-500 p-2">{data.main.humidity}</td>
            </tr>
            <tr>
              <td className="border border-slate-500 p-2">Date</td>
              <td className="border border-slate-500 p-2">
                {new Date(data.dt * 1000).toLocaleDateString('en-IN')}
              </td>
            </tr>
          </tbody>
        </table>
      

        )}

    </div>
  )
}

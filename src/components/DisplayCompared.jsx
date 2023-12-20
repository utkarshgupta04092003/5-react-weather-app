import React from 'react'

export default function DisplayCompared({data1, data2, isLoading}) {
  return isLoading ? <h1>Loaidng...</h1> : (
    <div className="flex justify-center mt-5">
          <table className="table-auto border-collapse border border-slate-500">
            <thead>
              <tr>
                <th className="border border-slate-500 p-2">Property</th>
                <th className="border border-slate-500 p-2">{data1.name}</th>
                <th className="border border-slate-500 p-2">{data2.name}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-slate-500 p-2">Latitude</td>
                <td className="border border-slate-500 p-2">{data1.coord.lat}</td>
                <td className="border border-slate-500 p-2">{data2.coord.lat}</td>
              </tr>


              <tr>
                <td className='border border-slate-500 p-2'>Longitude</td>
                <td className='border border-slate-500 p-2'>{data1.coord.lon}</td>
                <td className='border border-slate-500 p-2'>{data2.coord.lon}</td>
              </tr>


              <tr>
                <td className='border border-slate-500 p-2'>Temprature</td>
                <td className='border border-slate-500 p-2'>{data1.main.temp}</td>
                <td className='border border-slate-500 p-2'>{data2.main.temp}</td>
              </tr>

              <tr>
                <td className='border border-slate-500 p-2'>Minimum Temp</td>
                <td className='border border-slate-500 p-2'>{data1.main.temp_min}</td>
                <td className='border border-slate-500 p-2'>{data2.main.temp_min}</td>
              </tr>

              <tr>
                <td className='border border-slate-500 p-2'>Maximum Temp</td>
                <td className='border border-slate-500 p-2'>{data1.main.temp_max}</td>
                <td className='border border-slate-500 p-2'>{data2.main.temp_max}</td>
              </tr>

              <tr>
                <td className='border border-slate-500 p-2'>Pressure</td>
                <td className='border border-slate-500 p-2'>{data1.main.pressure}</td>
                <td className='border border-slate-500 p-2'>{data2.main.pressure}</td>
              </tr>

              <tr>
                <td className='border border-slate-500 p-2'>Humidity</td>
                <td className='border border-slate-500 p-2'>{data1.main.humidity}</td>
                <td className='border border-slate-500 p-2'>{data2.main.humidity}</td>
              </tr>


              <tr>
                <td className='border border-slate-500 p-2'>Date</td>
                <td className='border border-slate-500 p-2'>{new Date(data1.dt * 1000).toLocaleDateString('en-IN')}</td>
                <td className='border border-slate-500 p-2'>{new Date(data2.dt * 1000).toLocaleDateString('en-IN')}</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
  )
}

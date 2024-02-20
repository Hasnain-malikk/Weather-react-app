import React from 'react';

export default function Results({ weatherData,historyData,historySearch}) {

    const historyItems = historyData.map((item,index) => {
        return <li onClick={()=>historySearch(item)} className='text-xl cursor-pointer' key={index}>{item}</li>

    })
  return (
    <div className='grid grid-cols-4 shadow-xl mt-5 p-3'>
        <div className='col-span-1 border-r-4'>
            <h3 className='text-2xl text-center my-2'>History</h3>
            <ul>
                {historyItems}
            </ul>
        </div>
        <div className='col-span-3'>
      {
        weatherData.length !== 0 ? (
          <>
            <h2 className="mb-7 text-4xl text-center">{weatherData.location.name}</h2>
            <div className='text-xl flex justify-around my-2'>
              <div>Temperature Celsius: {weatherData.current.temp_c}°C</div>
              <div>Temperature Fahrenheit: {weatherData.current.temp_f}°F</div>
            </div>
            <div className='text-xl flex justify-around my-2'>
              <div><img src={`${weatherData.current.condition.icon}`} alt="" /></div>
              <div className='mt-3'>{weatherData.current.condition.text}</div>
            </div>
          </>
        ) : 
        <div className='text-4xl text-center mb-2'>
        Please enter City Name
        </div>
      }
      </div>
    </div>
  );
}

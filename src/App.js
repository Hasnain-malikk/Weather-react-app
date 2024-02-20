import {  useState } from 'react';
import './App.css';
import Results from './components/Results';
import Search from './components/Search';
import axios from 'axios';

function App() {
  const [search,setSearch] = useState("");
  const [weather,setWeather] = useState([]);
  const [history,setHistory] = useState([]);
  const changeSearch = (value) => {
    setSearch(value);

  }

  const searchWeatherHandler = () => {
    if(search !== "" ){
      axios.get(`https://api.weatherapi.com/v1/current.json?key=9fa97c4db07047fe858154715241002%20&q=${search}&aqi=no` )
      .then((response) => {
        //console.log(response.data)
        setWeather(response.data)
        if(history.indexOf(search) === -1){
          setHistory(
            [
              ...history,
              search
            ]
            )
          }
        })
        .catch((error) => { 
          console.log(error)
        })
      }
      
    } 
    const historyDataHandler = async (data) => {
      setSearch(data);
      if(data !== "" ){
        axios.get(`https://api.weatherapi.com/v1/current.json?key=9fa97c4db07047fe858154715241002%20&q=${data}&aqi=no` )
        .then((response) => {
          //console.log(response.data)
          setWeather(response.data)
          if(history.indexOf(data) === -1){
            setHistory(
              [
                ...history,
                search
              ]
              )
            }
          })
          .catch((error) => { 
            console.log(error)
          })
        }
  
    }
  return (
    <div className='max-w-[1240px] mx-auto mt-2 p-3'>
    <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
    <Results weatherData={weather} historyData={history} historySearch={historyDataHandler}/>
    </div>
  );
}


export default App;

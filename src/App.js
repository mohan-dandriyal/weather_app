import logo from './logo.svg';
import './App.css';
import { Input } from './input/Input';
import { Card } from './card/Card';
import { useWeatch } from './context/WeatherContext';
import { useEffect } from 'react';

import { IoSearch } from "react-icons/io5";

function App() {

  const weatch = useWeatch()


  useEffect(() => {
    // get courent locetion 
    weatch.featchCurentLocetion()
  }, [])

  return (
    <div className="App">
    <div className='' style={{padding : '20px'}}>
    <h2>Weatch Forecast</h2>
      <div className=''>
        <div className='box'>
          <Input />
          <button onClick={weatch.featchData}> <IoSearch /> </button>
        </div>
        <Card />
      </div>
    </div>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coins from './Components/Coins'
import Navbar from './Components/Navbar';

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCoins(res.data);
      console.log(res.data[0]);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <Navbar/>
      <Coins coins={coins}/>
    </>
  );
}

export default App;

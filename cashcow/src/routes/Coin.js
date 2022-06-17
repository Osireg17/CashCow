import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import './Coin.css'

const Coin = () => {
  const params = useParams();

  const [Coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
  
  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCoin(res.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  return (
    <div>
        <div className="coin-container">
            <div className="content">
              <h1 className="CoinId">{Coin.name}</h1>
            </div>
            <div className="content">
              <div className="rank">
                <span className="rank-btn">Rank No. {Coin.market_cap_rank}</span>
              </div>
              <div className="coin-symbol">
                  <div className="coin-img">
                    {Coin.image ? <img src={Coin.image.small} alt=""/> : <img src="https://via.placeholder.com/150" alt=""/>}
                    <p>{Coin.name}</p>
                    <p>{Coin.symbol}</p>
                  </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Coin
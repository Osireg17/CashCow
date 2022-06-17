import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import { Link } from 'react-router-dom'

const Coins = ({coins}) => {
    return (
        <div className="container">
            <div>
                <div className="headings">
                    <p>Rank</p>
                    <p className="coin-name">Coin Name</p>
                    <p className="coin-price">Price</p>
                    <p className="coin-change">% Change</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Market Cap</p>
                </div>

                {coins.map((coins) => {
                    return (
                        <Link to={`/coin/${coins.id}`} key={coins.id} element={<Coin/>}>
                        <CoinItem coins={coins}/>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins
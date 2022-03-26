import React from 'react'
import "./Coin.css";

export default function Coin({ rank, shortName, name, image, price, marketCap, priceChange }) {
  return (
    <div className='coin-container'>
        <div className='coin'>
            <p>{rank}</p>
            <img src={image} alt="coin" />
            <h4>{name}</h4>
        </div>
        <div className='shortname'>{shortName}</div>
        <div className='coin-data'>
            <p className="p-price">{price.toLocaleString()} USD</p>
            <p className="p-marketcap">{marketCap.toLocaleString()} USD</p>
            {
              priceChange >= 0 ? (
                <p className="p-pricechange green">{priceChange.toFixed(2)}%</p>
              ) : (
                <p className="p-pricechange red">{priceChange.toFixed(2)}%</p>
              )
            }
            
        </div>
    </div>
  )
}

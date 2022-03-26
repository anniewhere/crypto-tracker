import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from "./Components/Coin";

function App() {

  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=> {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        console.log(res.data)
        setCoin(res.data)
      }
    )
  }, []) 

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coin.filter(coin => {
    return (coin.name.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div className="crypto-app">
      <div className='search'>
        <form>
          <input id="search-field" type='search' placeholder='Type a currency... ' onChange={handleChange}/>
        </form>
      </div>
      <div className='crypto-header'>
        <p id="rank">#</p>
        <p id="coin">Coin</p>
        <p id="price">Price</p>
        <p id="marketcap">Market Cap</p>
        <p id="pricechange">24h</p>
      </div>
      {

        filteredCoins.map(coin => {
          return (
            <Coin 
              key={coin.id}
              rank={coin.market_cap_rank} 
              shortName={coin.symbol} 
              name={coin.name} 
              image={coin.image} 
              price={coin.current_price} 
              marketCap={coin.market_cap} 
              priceChange={coin.price_change_percentage_24h} 
            />
          )
        })

      }
    </div>
  );
}

export default App;

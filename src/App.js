import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      });
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app-top">
        <h1>Search Your Crypto</h1>
        <form>
          <input type="text" placeholder="Search" onChange={updateSearch} />
        </form>
      </div>
      <div className="app-bottom">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              value={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              current={coin.current_price}
              dailyHigh={coin.high_24h}
              dailyLow={coin.low_24h}
              image={coin.image}
              change={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

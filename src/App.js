import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <ul>
        <li>
          <h1 className="text-center">Crypto Tracker</h1>
        </li>
      </ul>
      <div className="coin-search">
        <h1 className="coin-text" id="typewriter">
          Search a currency
        </h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}

      <p className="text-center">
        Copyright &copy; priyaanshu-mittra-crypto-tracker.com
        <h3>Developed by Priyaanshu Mittra</h3>
      </p>
      <div>
      <ReactBootStrap.Spinner animation="border" variant="primary" />
      <ReactBootStrap.Spinner animation="border" variant="secondary" />
      <ReactBootStrap.Spinner animation="border" variant="success" />
      <ReactBootStrap.Spinner animation="border" variant="danger" />
      <ReactBootStrap.Spinner animation="border" variant="warning" />
      <ReactBootStrap.Spinner animation="border" variant="info" />
      <ReactBootStrap.Spinner animation="border" variant="light" />
      <ReactBootStrap.Spinner animation="border" variant="dark" />
      <ReactBootStrap.Spinner animation="border" variant="primary" />
      <ReactBootStrap.Spinner animation="border" variant="secondary" />
      <ReactBootStrap.Spinner animation="border" variant="success" />
      <ReactBootStrap.Spinner animation="border" variant="danger" />
      <ReactBootStrap.Spinner animation="border" variant="warning" />
      <ReactBootStrap.Spinner animation="border" variant="info" />
      <ReactBootStrap.Spinner animation="border" variant="light" />
      <ReactBootStrap.Spinner animation="border" variant="dark" />
      <ReactBootStrap.Spinner animation="border" variant="primary" />
      <ReactBootStrap.Spinner animation="border" variant="secondary" />
      <ReactBootStrap.Spinner animation="border" variant="success" />
      <ReactBootStrap.Spinner animation="border" variant="danger" />
      <ReactBootStrap.Spinner animation="border" variant="warning" />
      <ReactBootStrap.Spinner animation="border" variant="info" />
      <ReactBootStrap.Spinner animation="border" variant="light" />
      <ReactBootStrap.Spinner animation="border" variant="dark" />
      </div>
    </div>
  );
}

export default App;

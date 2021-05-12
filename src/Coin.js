import React from "react";
import "./coin.css";

const Coin = ({
  image,
  name,
  symbol,
  current,
  dailyHigh,
  dailyLow,
  change,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <img src={image} alt="coin-image" />
        <h2>{name}</h2>
        <h4>${current.toFixed(2)}</h4>
        {change < 0 ? (
          <p className="red">{change.toFixed(2)}%</p>
        ) : (
          <p className="green">{change.toFixed(2)}%</p>
        )}
        <img className="img2" src={image} alt="coin-image" />
      </div>
    </div>
  );
};

export default Coin;

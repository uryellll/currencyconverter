import React from "react";
import "./Card.css";

export default function Card({
  title,
  currencyOptions,
  selectedCurrency,
  setSelectedCurrency,
  amount,
  onChangeAmount,
}) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <select value={selectedCurrency} onChange={setSelectedCurrency}>
        {currencyOptions.map((option) => {
          return (
            <option key={Math.random() * 1000} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <input type="number" value={amount} onChange={onChangeAmount} />
    </div>
  );
}

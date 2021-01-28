import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const BASE_URL = "https://api.exchangeratesapi.io/latest";
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setExchangeRate(data.rates[firstCurrency]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);

  function changeFromCurrency(e) {
    setFromCurrency(e.target.value);
  }

  function changeToCurrency(e) {
    setToCurrency(e.target.value);
  }

  function onChangeFromAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function onChangeToAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  return (
    <div className="main-container">
      <div className="flex-container">
        <Card
          title="FROM"
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          setSelectedCurrency={(e) => changeFromCurrency(e)}
          amount={fromAmount}
          onChangeAmount={onChangeFromAmount}
        />
        <Card
          title="TO"
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          setSelectedCurrency={(e) => changeToCurrency(e)}
          amount={toAmount}
          onChangeAmount={onChangeToAmount}
        />
      </div>
    </div>
  );
}

export default App;

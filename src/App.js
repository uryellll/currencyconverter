import React, { useEffect } from "react";
import "./App.css";

function App() {
  const BASE_URL = "https://api.exchangeratesapi.io/latest";
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  console.log(currencyOptions);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

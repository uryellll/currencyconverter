import React from "react";
import "./container.css";

export default function Container({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="inputs">
        <h1>Choose currency</h1>
        <select name=""></select>
        <h1>Amount</h1>
        <input type="number" />
      </div>
    </div>
  );
}

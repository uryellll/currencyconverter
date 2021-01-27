import React from "react";
import "./container.css";

export default function Container({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="inputs">
        <h1>Choose currency</h1>
            <input name="Countries" list="countries" placeholder="countries" />
            <datalist id="countries">
                <option value="India(INR)"/>
                <option value="United States of America(USD)" />
                <option value="Afghanistan(AFN)" />
                <option value="Algeria(DZD" />
                <option value="Australia(AUD)" />
                <option value="Phillippines(PHP)" />
                <option value="United Kingdom(GBP)" />
            </datalist>
        <h1>Amount</h1>
        <input type="number" />
      </div>
    </div>
  );
}

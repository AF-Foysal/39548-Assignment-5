import { useState } from "react";
export default function JoshAPI() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const [currency, setCurrency] = useState("USD");
  const [input, setInput] = useState("USD");

  function changeCurrency(e) {
    setInput(e.target.value);
  }

  async function getCurrencyData() {
    if (input === "USD" || input === "EUR" || input === "GBP") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCurrency(data.bpi[input]);
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <>
      <input onChange={changeCurrency} value={input} />
      <button onClick={getCurrencyData}>Find Bitcoin Value</button>
      <h1 style={{ color: "purple", fontSize: "2rem" }}>
        Enter currencies USD, EUR, or GBP
      </h1>
      <ul style={{ listStyle: "none", color: "darkgreen" }}>
        <li>Currency Name: {currency.description}</li>
        <li>Currency Rate: {currency.rate}</li>
      </ul>
    </>
  );
}

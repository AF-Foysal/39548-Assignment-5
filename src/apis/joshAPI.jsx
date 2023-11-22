import { useState } from "react";
import { changeCurrency } from "../cashSlice";
import { useSelector, useDispatch } from "react-redux";

export default function JoshAPI() {
	const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	const tempCurr = useSelector((state) => state.cash.curr);
	const [currency, setCurrency] = useState("USD");
	const dispatch = useDispatch();
	const [input, setInput] = useState("USD");

	function changeCurr(e) {
		const tempInput = e.target.value;
		setInput(tempInput);
	}

	async function getCurrencyData() {
		console.log("redux state", tempCurr);
		console.log("input", input);
		if (tempCurr === "USD" || tempCurr === "EUR" || tempCurr === "GBP") {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setCurrency(data.bpi[tempCurr]);
					console.log(data);
				})
				.catch((error) => console.error(error));
		}
	}
	const newTemp = input;
	dispatch(changeCurrency(newTemp));

	return (
		<>
			<input onChange={changeCurr} value={input} />
			<button
				onClick={() => {
					getCurrencyData();
				}}
			>
				Find Bitcoin Value
			</button>
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

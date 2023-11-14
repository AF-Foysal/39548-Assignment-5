import { useState } from "react";

export default function AzmainAPI() {
	const [age, setAge] = useState();
	const [name, setName] = useState("azmain");
	const endpoint = "https://api.agify.io/?name=";

	function handleNameChange(e) {
		setName(e.target.value);
	}

	async function getAge() {
		fetch(endpoint + name)
			.then((response) => response.json())
			.then((data) => {
				setAge(data.age);
				console.log(data);
			})
			.catch((error) => console.error(error));
	}

	return (
		<>
			<input onChange={handleNameChange} value={name} />
			<button onClick={getAge}>Get Age</button>
			<h1> Here is the age for name: {name} </h1>
			<h2>AGE : {age}</h2>
		</>
	);
}
import { useState } from "react";
import { changeWord } from "../wordSlice";
import { useSelector, useDispatch } from "react-redux";

export default function FetchAbdullah() {
	const [wordDef, setWordDef] = useState();
	const tempWord = useSelector((state) => state.word_.word);
	const dispatch = useDispatch();
	const [input, setInput] = useState("mechanic");
	const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";

	function handleWordChange(e) {
		setInput(e.target.value);
	}

	async function getWord() {
		console.log("redux state", tempWord);
		console.log("input", input);
		fetch(endpoint + input)
			.then((response) => response.json())
			.then((data) => {
				setWordDef(data[0].meanings);
				console.log(data[0].meanings);
			})
			.catch((error) => console.error(error));
	}

	const newWordTemp = input;
	dispatch(changeWord(newWordTemp));

	return (
		<>
			<input onChange={handleWordChange} value={input} />
			<button onClick={getWord}>Get Definition</button>
			<h1> Here is definition for word: {input} </h1>
			{wordDef
				? wordDef.map((meaning) => {
						return (
							<p key={meaning.definitions}>
								{meaning.partOfSpeech} :{" "}
								{meaning.definitions[0].definition}
							</p>
						);
				  })
				: null}
		</>
	);
}

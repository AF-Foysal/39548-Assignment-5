import { useState, useEffect } from "react";

export default function FetchAbdullah() {
	const [word, setWord] = useState();

	useEffect(() => {
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/mechanic")
			.then((response) => response.json())
			.then((data) => {
				setWord(data[0].meanings);
				console.log(data[0].meanings);
			});
	}, []);

	return (
		<>
			<h1> Here is definition for word: Mechanic </h1>
			{word
				? word.map((meaning) => {
						return (
							<p key={word}>
								{meaning.partOfSpeech} :{" "}
								{meaning.definitions[0].definition}
							</p>
						);
				})
				: null}
		</>
	);
}

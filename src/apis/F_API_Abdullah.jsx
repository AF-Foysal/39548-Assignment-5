import { useState } from "react";

export default function FetchAbdullah() {
  const [wordDef, setWordDef] = useState();
  const [word, setWord] = useState("mechanic");
  const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  function handleWordChange(e) {
    setWord(e.target.value);
  }

  async function getWord() {
    fetch(endpoint + word)
      .then((response) => response.json())
      .then((data) => {
        setWordDef(data[0].meanings);
        console.log(data[0].meanings);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <input onChange={handleWordChange} value={word} />
      <button onClick={getWord}>Get Definition</button>
      <h1> Here is definition for word: {word} </h1>
      {wordDef
        ? wordDef.map((meaning) => {
            return (
              <p key={meaning.definition}>
                {meaning.partOfSpeech} : {meaning.definitions[0].definition}
              </p>
            );
          })
        : null}
    </>
  );
}

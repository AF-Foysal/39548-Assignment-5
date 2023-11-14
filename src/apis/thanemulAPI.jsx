import React, { useState } from "react";

export default function FetchThanemul() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const endpoint = "https://jservice.io/api/random";

  async function getQuestion() {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { question, answer } = data[0];

      setQuestion(question);
      setAnswer(answer);
      setShowAnswer(false);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  function handleShowAnswer() {
    setShowAnswer(true);
  }

  return (
    <>
      <h1>Trivia Game</h1>
      <button onClick={getQuestion}>Get New Question</button>
      <div>
        {question && (
          <>
            <h2>Question:</h2>
            <p>{question}</p>
            {!showAnswer && (
              <button onClick={handleShowAnswer}>Show Answer</button>
            )}
            {showAnswer && (
              <>
                <h2>Answer:</h2>
                <p>{answer}</p>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setQuestion,
  setAnswer,
  setShowAnswer,
  setError,
} from '../jeapordySlice';

const FetchThanemul = () => {
  const dispatch = useDispatch();
  const { question, answer, showAnswer, error } = useSelector(
    (state) => state.jeapordy
  );

  const endpoint = 'https://jservice.io/api/random';

  const getQuestion = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      const { question, answer } = data[0];

      dispatch(setQuestion(question));
      dispatch(setAnswer(answer));
      dispatch(setShowAnswer(false));
      dispatch(setError(null));
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch(setError('Error fetching question'));
    }
  };

  useEffect(() => {
    getQuestion();
  }, []); // Removed dispatch from the dependency array to prevent unnecessary re-renders

  const handleShowAnswer = () => {
    dispatch(setShowAnswer(true));
  };

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
};

export default FetchThanemul;


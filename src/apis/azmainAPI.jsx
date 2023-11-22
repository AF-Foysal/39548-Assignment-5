import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName, setError } from './azmainSlice';

export default function AzmainAPI() {
  const dispatch = useDispatch();
  const { age, name, error } = useSelector((state) => state.azmain);
  const endpoint = `https://api.agify.io/?name=${name}`;

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const getAge = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      dispatch(setAge(data.age));
      dispatch(setError(null));
    } catch (error) {
      console.error('Error fetching age:', error);
      dispatch(setError('Error fetching age'));
    }
  };

  useEffect(() => {
    getAge();
  }, [name]); 

  return (
    <>
      <input onChange={handleNameChange} value={name} />
      <button onClick={getAge}>Get Age</button>
      <h1> Here is the age for name: {name} </h1>
      {error ? <p>Error: {error}</p> : null}
      {age ? <h2>AGE: {age}</h2> : <p>Loading...</p>}
    </>
  );
}
import { useState, useEffect, useCallback } from 'react';

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

  const fetchPokemon = useCallback(async () => { // error just in case testing and api call fails 
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error.message);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchPokemon();
  }, [pokemonName, fetchPokemon]);

  console.log('Pokemon Data:', pokemonData);

  return (
    <>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={fetchPokemon}>Fetch Pokémon</button>

      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          {pokemonData.sprites && (
            <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} sprite`} />
          )}
          {pokemonData.abilities ? (
            pokemonData.abilities.length > 0 ? (
              <>
                <h3>Abilities:</h3>
                <ul>
                  {pokemonData.abilities.map((ability) => (
                    <li key={ability?.ability?.name}>
                      {ability?.ability?.name} (Hidden: {ability?.is_hidden ? 'Yes' : 'No'})
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No abilities found for this Pokémon.</p>
            )
          ) : (
            <p>Pokémon not found. Enter valid Pokemon name to start and output abilities and sprite ex. Pikachu</p>
          )}
        </div>
      )}
    </>
  );
}

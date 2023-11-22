import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from "../pokemonSlice";

export default function Pokemon() {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  const [pokemonName, setPokemonName] = useState('');

  const handleFetchPokemon = useCallback(() => {
    dispatch(fetchPokemonData(pokemonName.toLowerCase()));
  }, [dispatch, pokemonName]);

  useEffect(() => {
    handleFetchPokemon();
  }, [handleFetchPokemon]);

  console.log('Pokemon Data:', pokemonData);

  return (
    <>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleFetchPokemon}>Fetch Pokémon</button>

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
            <p>Pokémon not found. Enter a valid Pokemon name to start and output abilities and sprite (e.g., Pikachu)</p>
          )}
        </div>
      )}
    </>
  );
}

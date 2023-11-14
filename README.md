# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For code found in "joshAPI.jsx":
- API PROVIDER: CoinDesk from https://apipheny.io/free-api/
- WRITEUP CREDITED TO: Joshua Ramcharan
- API NAME: CoinDesk BPI
- API DOCUMENTATION: https://www.coindesk.com/
- ![image](https://github.com/AF-Foysal/39548-Assignment-5/assets/112503024/0a120de7-9136-4a7c-886d-c06aee59d000)
- API USAGE ON APPLICATION: Used for retreiving the full name and current bitcoin price within a certain currency, allowing for USD, EUR, and GBP

For code found in "thanemulAPI.jsx":
- API PROVIDER: jService from https://github.com/public-apis/public-apis
- WRITEUP CREDITED TO: Thanemul Islam
- API NAME: jService
- API DOCUMENTATION: https://jservice.io/
- ![image](https://github.com/AF-Foysal/39548-Assignment-5/assets/112503024/0a120de7-9136-4a7c-886d-c06aee59d000)
- API USAGE ON APPLICATION: Used for retreiving a random Jeopardy question that after user is done answering can click a button and view answer

## Pokémon API

**API Provider:** PokeAPI

**API Name:** [PokeAPI](https://pokeapi.co/)

**Screenshot of a successful API test in Postman:**
![PokemonImage](https://github.com/AF-Foysal/39548-Assignment-5/src/assets/pokemonApi.png)

**API Documentation:** [PokeAPI Documentation](https://pokeapi.co/docs/v2)

**Description:**
PokeAPI is a comprehensive Pokémon database API that provides information about Pokémon species, abilities, and more.


**Usage on Site:**
- The "Pokemon" component utilizes this API to fetch and display Pokémon details based on user input.
- Encountered a type error in the Pokemon function while fetching data from the Pokemon API. The type error in the Pokemon function was related to the fact that the API request was being made with an empty or undefined pokemonName. To address this, implemented a conditional check (an if statement) to ensure that the API request is only made when a valid pokemonName is provided. (also doubles as instructions)




import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

// adding event listeners
const form = document.querySelector("#pokeForm")
form.addEventListener('submit', fetchPokemonData, false);

// functions
async function fetchPokemonData(event) {
    event.preventDefault();
    const pokeName = event.target.elements.searchTerm.value;
    console.log(pokeName);
    
    try {
        const species = await P.getPokemonSpeciesByName(pokeName);
        const frenchName = species.names.find(
        pokeAPIName => pokeAPIName.language.name === 'fr'
        ).name;
        console.log(frenchName);
  } catch (error) {
    // do something real
    console.debug("error");
    throw error;
  }
}
// const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


async function getRandomPokemonAsync(){

	let ID = Math.floor(Math.random() * 1010) + 1;

	let response = await fetch(API_BASE_URL + ID);
	let data = await response.json();

	console.log(data.name);


}
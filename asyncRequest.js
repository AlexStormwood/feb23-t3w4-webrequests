// const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


async function getRandomPokemonAsync(){

	let ID = Math.floor(Math.random() * 1010) + 1;
	let data = null
	try {
		let response = await fetch(API_BASE_URL + ID);
		data = await response.json();
	} catch (error) {
		console.log(error)
	}

	let oneLinerData = await fetch(API_BASE_URL + ID).then(response => response.json()).catch(error => console.log(error));

	console.log(data.name);
	console.log("oneliner name: " + oneLinerData.name);

	let pkmImage = document.getElementById("pokemonImage");
	pkmImage.src = data.sprites.other["official-artwork"].front_default;

	console.log("Result of API request is:" + oneLinerData);

}
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


function getRandomPokemon(){
	//let result = fetch("https://pokeapi.co/api/v2/pokemon/" + 25).then()
	//let result = fetch("https://pokeapi.co/api/v2/pokemon/25").then()
	// let ID = 25;
	// let result = fetch("https://pokeapi.co/api/v2/pokemon/" + ID).then()

	let ID = 25;
	let result = fetch(API_BASE_URL + ID).then((response) => {
		console.log(response);

		return response;
	}).catch(error => {
		console.log(error);
	});

	console.log("Result of API request is:" + result);

	// let somePromise = new Promise(resolve, reject => {

	// });
	// somePromise().then().catch();


}
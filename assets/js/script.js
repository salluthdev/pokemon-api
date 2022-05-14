// Onload
// Fetch All Pokemons
fetch('https://pokeapi.co/api/v2/pokemon/')
	.then(
		function(response){
			if(response.status != 200) {
				console.log('Oops..' + response.status)
				return
			}

			response.json().then(function(data) {
				const pokemons = (data.results)
				pokemons.forEach(pokemon => {
					document.getElementById('pokemonList')
						.insertAdjacentHTML('beforeEnd', 
							`<li onclick='detail("${pokemon.url}")'> ${pokemon.name} </li>`
						)
				})
			})
		}
	)
	.catch(function (err){
		console.log(err)
	})

function detail(url) {
	fetch(url).then(function(response) {
		response.json().then(function(pokemon) {

			document.getElementById('detail').innerHTML = '';

			document.getElementById('detail')
				.insertAdjacentHTML('beforeEnd', 
					`
					<h3> ${pokemon.name} </h3>
					<img src='${pokemon.sprites.front_default}'>
					<p>Jurus: ${pokemon.moves[0].move.name} </p>
					<p>Tinggi: ${pokemon.height} </p>
					<p>Berat: ${pokemon.weight} </p>
					`
				)
		})
	})
}
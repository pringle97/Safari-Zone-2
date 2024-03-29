/* eslint-disable no-undef */
// the one mcss function to rule them all (conveniently initializes everything so components work) https://materializecss.com/auto-init.html
M.AutoInit()
// local storage for caught pokemon
const caughtPokemonArr = JSON.parse(localStorage.getItem("caughtPokemonArr")) || []

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function typeWriter (i, words, speed) {
  if (i < words.length) {
    document.getElementById("caught-status").innerHTML += words.charAt(i)
    i++
    setTimeout(typeWriter, speed, i, words, speed)
  }
}

function addDecimal (num) {
  return (num / 10).toFixed(1)
}

function catchPokemon () {
  const roll = Math.floor(Math.random() * 3)
  return roll === 1
}

function didPokemonRun () {
  const roll = Math.floor(Math.random() * 3)
  return roll === 1
}

// easier to catch but run rate is higher
document.getElementById("rock").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById("caught-status").innerHTML = ""
  typeWriter(0, "The Pokemon is angry!", 40)
})

// throwing a berry makes it harder to catch, less likely to run
document.getElementById("berry").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById("caught-status").innerHTML = ""
  typeWriter(0, "The Pokemon is eating!", 40)
})

// click event to start random pokemon generator
document.getElementById("explore-button").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById("welcome-container").style.display = "none"
  document.getElementById("card-content").style.display = "block"
  document.getElementById("throwing-buttons").style.display = "block"
  const maxPokemonNumber = 386
  pokemonNum = (Math.floor(Math.random() * maxPokemonNumber) + 1)
  document.getElementById("pokemon-img").innerHTML = ""
  // grabbing information from pokemon API
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      // pokemon api data
      const pokemon = res.data
      // pokemon api hi-res sprites
      const svg = pokemon.sprites.other.dream_world.front_default
      // if statement if the pokemon has 2 type attributes
      if (pokemon.types[1]) {
        document.getElementById("pokemon-img").innerHTML = `
        <img class="imageArt" src="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById("card-content").innerHTML = `
        <h5>${capitalize(pokemon.species.name)}</h5>
        <br>
        <h6>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h6>
        <br>
        <h6>Height: ${addDecimal(pokemon.height)} m</h6>
        <br>
        <h6>Weight: ${addDecimal(pokemon.weight)} kg</h6>
        <br>
        `
        // if statement if the pokemon has 1 type attributes
      } else {
        document.getElementById("pokemon-img").innerHTML = `
        <img class="imageArt" src ="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById("card-content").innerHTML = `
        <h5>${capitalize(pokemon.species.name)}</h5>
        <br>
        <h6>Type: ${capitalize(pokemon.types[0].type.name)}</h6>
        <br>
        <h6>Height: ${addDecimal(pokemon.height)} m</h6>
        <br>
        <h6>Weight: ${addDecimal(pokemon.weight)} kg</h6>
        <br>
        `
      }
    })
})

// throw ball click event
document.getElementById("ball").addEventListener("click", event => {
  event.preventDefault()
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      const pokemon = res.data
      const pokemonName = pokemon.name
      // random number generator to capture pokemon
      const wasCaught = catchPokemon()
      //  if statement for caught pokemon vs uncaught pokemon
      if (wasCaught) {
        // if caught push pokemon name into json array
        caughtPokemonArr.push(pokemonName)
        // taking array and setting as string to be put in local storage
        localStorage.setItem("caughtPokemonArr", JSON.stringify(caughtPokemonArr))
        // when pokemon is caught opens modal for alert
        document.getElementById("caught-status").innerHTML = `You've caught ${capitalize(pokemon.species.name)}!`
        // type writer function variables
        const pokemonStatus = document.getElementById("caught-status").innerHTML
        document.getElementById("caught-status").innerHTML = ""
        // initiate type writer function for caught pokemon
        typeWriter(0, (pokemonStatus), 40)
      } else {
        document.getElementById("caught-status").innerHTML = ""
        // function for pokemon running away
        const pokemonRan = didPokemonRun()
        if (pokemonRan) {
          document.getElementById("pokemon-img").innerHTML = `
        <img src="" alt="">
        <h6 style="text-align: center;">Press explore to keep playing!</h6>
        `
          document.getElementById("card-content").style.display = "none"
          document.getElementById("throwing-buttons").style.display = "none"
          typeWriter(0, "The Pokemon broke free! The Pokemon ran away!", 40)
        } else {
          typeWriter(0, "The Pokemon broke free!", 40)
        }
      }
    })
})

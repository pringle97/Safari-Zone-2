/* eslint-disable no-undef */
// the one mcss function to rule them all (conveniently initializes everything so components work) https://materializecss.com/auto-init.html
M.AutoInit()

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function typeWriter (i, words, speed) {
  if (i < words.length) {
    document.getElementById("caughtStatus").innerHTML += words.charAt(i)
    i++
    setTimeout(typeWriter, speed, i, words, speed)
  }
}

function addDecimal (num) {
  return (num / 10).toFixed(1)
}

function catchPokemon () {
  const roll = Math.floor(Math.random() * 3)
  console.log(roll)
  return roll === 1
}

function didPokemonRun () {
  const roll = Math.floor(Math.random() * 2)
  return roll === 1
}

// easier to catch but run rate is higher
// document.getElementById("rock").addEventListener("click", event => {
//   event.preventDefault()
//   function throwRock() {
//     const roll =
//   }
//   document.getElementById("cardContent").innerHTML = ""
//   typeWriter(0, "The Pokemon is angry!", 50)
// })

// less likely to run but harder to catch
// document.getElementById("berry").addEventListener("click", event => {
//   event.preventDefault()
//   function throwBerry() {
//     const roll =
//   }
//   document.getElementById("cardContent").innerHTML = ""
//   typeWriter(0, "The Pokemon is eating!", 50)
// })
// click event to start random pokemon generator
document.getElementById("start-button").addEventListener("click", event => {
  event.preventDefault()
  document.getElementById("throwingButtons").style.display = "block"
  const maxPokemonNumber = 386
  pokemonNum = (Math.floor(Math.random() * maxPokemonNumber) + 1)
  document.getElementById("pokemonImg").innerHTML = ""
  // grabbing information from pokemon API
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      // pokemon api data
      const pokemon = res.data
      // pokemon api hi-res sprites
      const svg = pokemon.sprites.other.dream_world.front_default
      // if statement if the pokemon has 2 type attributes
      if (pokemon.types[1]) {
        document.getElementById("pokemonImg").innerHTML = `
        <img class="imageArt" src="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById("cardContent").innerHTML = `
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
        document.getElementById("pokemonImg").innerHTML = `
        <img class="imageArt" src ="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById("cardContent").innerHTML = `
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
      // grabbing array from localStorage and setting it to caughtPokemonArr variable. empty array if array doesn't exist. Parse with JSON.parse so a real array is returned, not a string array
      const caughtPokemonArr = JSON.parse(localStorage.getItem("caughtPokemonArr")) || []
      // random number generator to capture pokemon
      const wasCaught = catchPokemon()
      //  if statement for caught pokemon vs uncaught pokemon
      if (wasCaught) {
        // if caught push pokemon name into json array
        caughtPokemonArr.push(pokemonName)
        // taking array and setting as string to be put in local storage
        localStorage.setItem("caughtPokemonArr", JSON.stringify(caughtPokemonArr))
        // when pokemon is caught opens modal for alert
        document.getElementById("caughtStatus").innerHTML = `You've caught ${capitalize(pokemon.species.name)}!`
        // type writer function variables
        const pokemonStatus = document.getElementById("caughtStatus").innerHTML
        document.getElementById("caughtStatus").innerHTML = ""
        // initiate type writer function for caught pokemon
        typeWriter(0, (pokemonStatus), 40)
      } else {
        document.getElementById("caughtStatus").innerHTML = ""
        // function for pokemon running away
        const pokemonRan = didPokemonRun()
        if (pokemonRan) {
          document.getElementById("pokemonImg").innerHTML = `
        <img src="" alt="">
        <h6 style="text-align: center">Press explore to keep playing!<h6>
        `
          document.getElementById("cardContent").innerHTML = ""
          typeWriter(0, "The Pokemon broke free! The Pokemon ran away!", 40)
        } else {
          typeWriter(0, "The Pokemon broke free!", 40)
        }
      }
    })
})

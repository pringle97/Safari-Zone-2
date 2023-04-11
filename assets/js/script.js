// lowers audio volme when audio is played
let audio = document.getElementById("audio");
audio.volume = 0.1;
let audio1 = document.getElementById("audio1");
audio1.volume = 0.1;
let audio2 = document.getElementById("audio2");
audio2.volume = 0.1;

let randomNumber = (Math.floor(Math.random()))
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
//generating number between 1 and 100 
let x = Math.floor((Math.random() * 100) + 1)
let ball = document.getElementById("ball")
let throwBerry = document.getElementById("berry")
let throwRock = document.getElementById("rock")
let runAway = document.getElementById("run-away")

function catchPokemon() {
  let roll = Math.floor(Math.random() * 3)
  return roll == 1
}

function addDecimal(num) {
  return (num / 10).toFixed(1)
}

function didPokemonRun() {
  let roll = Math.floor(Math.random() * 2)
  return roll == 1
}

function typeWriter(i, words, speed) {
  if (i < words.length) {
    document.getElementById("caughtStatus").innerHTML += words.charAt(i);
    i++;
    setTimeout(typeWriter, speed, i, words, speed);
  }
}

// the one mcss function to rule them all (conveniently initializes everything so components work) https://materializecss.com/auto-init.html
M.AutoInit()

document.getElementById("rock").addEventListener("click", event => {
  event.preventDefault()

})
// click event to start random pokemon generator 
document.getElementById("start-button").addEventListener("click", event => {
  event.preventDefault()
  // set random pokemon number to 1-151
  const maxPokemonNumber = 251
  pokemonNum = (Math.floor(Math.random() * maxPokemonNumber) + 1)
  document.getElementById("pokemonImg").innerHTML = ""

  // grabbing information from pokemon API
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      // pokemon api data 
      let pokemon = res.data
      // pokemon api hi-res sprites 
      let svg = pokemon.sprites.other.dream_world.front_default

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
});



// throw ball click event
document.getElementById("ball").addEventListener("click", event => {
  event.preventDefault()

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {

      let pokemon = res.data
      let pokemonName = pokemon.name
      let pokeList = document.getElementById("pokeList")
      let caughtPokemonArr = JSON.parse(localStorage.getItem("caughtPokemonArr")) || []
      // grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array


      // random number generator to capture pokemon
      let wasCaught = catchPokemon()

      //  if statement for caught pokemon vs uncaught pokemon
      if (wasCaught) {
        // if caught push pokemon name into json array
        caughtPokemonArr.push(pokemonName)
        // taking array and setting as string to be put in local storage 
        localStorage.setItem("caughtPokemonArr", JSON.stringify(caughtPokemonArr))

        // when pokemon is caught opens modal for alert 
        document.getElementById("caughtStatus").innerHTML = `You've caught ${capitalize(pokemon.species.name)}!`

        // type writer function variables
        let pokemonStatus = document.getElementById("caughtStatus").innerHTML
        // let speed = 50
        document.getElementById("caughtStatus").innerHTML = ""

        // initiate type writer function for caught pokemon 
        typeWriter(0, (pokemonStatus), 50)
      } else {
        document.getElementById(`caughtStatus`).innerHTML = ""

        // write function for pokemon running away here 
        let pokemonRan = didPokemonRun()
        if (pokemonRan) {

          document.getElementById("pokemonImg").innerHTML = `
        <img src="" alt="">
        `
          document.getElementById("cardContent").innerHTML = ``
          typeWriter(0, "The Pokemon broke free! The Pokemon ran away!", 50)
        }
        else {
          typeWriter(0, "The Pokemon broke free!", 50)
        }
      }
    })
})

//delete pokemon from dex
// lowers audio volme when audio is played
let audio = document.getElementById(`audio`);
audio.volume = 0.1;
let audio1 = document.getElementById(`audio1`);
audio1.volume = 0.1;
let audio2 = document.getElementById(`audio2`);
audio2.volume = 0.1;

let randomNumber = (Math.floor(Math.random()))
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
//generating number between 1 and 100 
let x = Math.floor((Math.random() * 100) + 1)
let ball = document.getElementById('ball')
let berry = document.getElementById('berry')
let goNear = document.getElementById('go-near')
let runAway = document.getElementById('run-away')
console.log(x)

let pokemonNum 


let addDecimal = (num) => {
  return (num / 10).toFixed(1)
}

// the one mcss function to rule them all (conveniently initializes everything so components work)
M.AutoInit()

// click event to start random pokemon generator 
document.getElementById('start-button').addEventListener('click', event => {
  event.preventDefault()
  // set random pokemon number to 1-151
  pokemonNum = (Math.floor(Math.random() * 151) + 1)
  console.log(pokemonNum)
  document.getElementById('pokemonImg').innerHTML = ''

  // grabbing information from pokemon API
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      // pokemon api data 
      let pokemon = res.data
      console.log(pokemon)
      // pokemon api hi-res sprites 
      let svg = pokemon.sprites.other.dream_world.front_default
      
      // if statement if the pokemon has 2 type attributes
      if (pokemon.types[1]) {
        document.getElementById('pokemonImg').innerHTML = `
        <img class="imageArt" src="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById('cardContent').innerHTML = `
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
        console.log(pokemon.types[0].type.name)
        document.getElementById('pokemonImg').innerHTML = `
        <img class="imageArt" src ="${svg}" alt="${pokemon.species.name}" width="400" height="400">
        `
        // rendering pokemon information to innerHTML
        document.getElementById('cardContent').innerHTML = `
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
    // .catch (err => console.log(err))
    
  });

  // throw ball click event
  document.getElementById('ball').addEventListener('click', event => {
    
    event.preventDefault()
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      
      let pokemon = res.data
      console.log(pokemon)
      let pokemonName = pokemon.name
      console.log(pokemonName)
      let pokeList = document.getElementById('pokeList')
  
      
      
      let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []
      // grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
      
        console.log(caughtPokemonArr, `caughtPokemonArr, AKA our array that we pulled from localStorage. This should console log as an empty array on the first try since we didn't push anything into it yet.`)
        // check caughtPokemonArr value in console


        // random number generator to capture pokemon
        let catchPokemon = Math.floor(Math.random() * 3)
        console.log(catchPokemon)

        
      //  if statement for caught pokemon vs uncaught pokemon
        if (catchPokemon == 1) {
          // if caught push pokemon name into json array
          caughtPokemonArr.push(pokemonName)
          // taking array and setting as string to be put in local storage 
          localStorage.setItem('caughtPokemonArr', JSON.stringify(caughtPokemonArr))
          console.log(pokemonName, 'caughtPokemonArr after we pushed stuff')

          // when pokemon is caught opens modal for alert 
          document.getElementById(`caughtStatus`).innerHTML = `You've caught ${capitalize(pokemon.species.name)}!`
          
          // type writer function variables
          let pokemonStatus = document.getElementById(`caughtStatus`).innerHTML
          let i = 0
          let speed = 50
          let words = `${pokemonStatus}`
          console.log(pokemonStatus)
          document.getElementById(`caughtStatus`).innerHTML = ``

          // type writer function
          function typeWriter() {
            if (i < words.length) {
              document.getElementById(`caughtStatus`).innerHTML += words.charAt(i);
              i++;
              setTimeout(typeWriter, speed);
            }
          }
          // initiate type writer function for caught pokemon 
          typeWriter()

          // 
        } else {
          document.getElementById(`caughtStatus`).innerHTML = `The Pokemon broke free!`
         
          // type writer function variables
          let pokemonFled = document.getElementById(`caughtStatus`).innerHTML
          let i = 0
          let speed = 50
          let words = `${pokemonFled}`
          console.log(pokemonFled)
          document.getElementById(`caughtStatus`).innerHTML = ``

          function typeWriter2() {
            if (i < words.length) {
              document.getElementById(`caughtStatus`).innerHTML += words.charAt(i);
              i++;
              setTimeout(typeWriter2, speed);
            }
          }
          typeWriter2()
          
          
        
        }
      })
  })










 
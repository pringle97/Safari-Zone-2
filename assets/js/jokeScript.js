// allows initialization for modals and nav bar for materialize 
M.AutoInit()

// lowers audio volme when audio is played
let audio = document.getElementById(`audio`);
audio.volume = 0.1;


// setting values 
let pokeList = document.getElementById('pokeList')
let addDecimal = (num) => { return (num / 10).toFixed(1) }
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
// grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
let caughtPokemonArr = JSON.parse(localStorage.getItem('caughtPokemonArr')) || []
// let pokemonName = caughtPokemonArr[]
// console.log(pokemonName)


// loop for array and rendering onto list 
caughtPokemonArr.forEach((pokemon, i) => {
  let listElem = document.createElement('ul')
  listElem.className = 'collection-item waves-effect z-depth-1'

  listElem.innerHTML = `
  <a class="btn-flat"><h6>${pokemon}</h6></a>
  <a class="btn-flat delete right" data-index="${i}"><i class="material-icons">cancel</i></a></a>
  `
  document.getElementById('pokeList').append(listElem)
})
console.log(caughtPokemonArr)

// generator value from user mouse clicks
let pokeCollection = document.querySelectorAll('.collection-item');
// console.log(pokeCollection)
pokeCollection.forEach(item => {
  item.addEventListener('click', event => {
    let valueCheck = event.target.firstChild.textContent
    let buttonElem = event.target.id
    console.log(buttonElem)
    console.log(valueCheck)
    console.log(event.target)


    event.preventDefault()

    // using generated value from mouse clicks to grab Pokemon information from Pokemon API
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valueCheck}`)
      .then(res => {

        let pokemon = res.data
        console.log(valueCheck)
        let svg = pokemon.sprites.other.dream_world.front_default

        //if more than 1 type
        if (pokemon.types.length > 0) {
          //if only one type  
          if (pokemon.types.length == 1) {
            //display 1 type
            document.getElementById(`type-screen`).innerHTML = `Type: ${capitalize(pokemon.types[0].type.name)}`
          }
          else {
            //display 2 types
            document.getElementById(`type-screen`).innerHTML = `Type: ${capitalize(pokemon.types[0].type.name)} ${capitalize(pokemon.types[1].type.name)}`
            console.log("there is more than one type")
          }
        }


        // adds information onto pokedex from pokemon API
        document.getElementById('main-screen').innerHTML = `
        <img class='sprites' src="${svg}" alt="${pokemon.species.name}">
        `
        document.getElementById('name-screen').innerHTML = `${capitalize(pokemon.species.name)}
        `
        document.getElementById(`about-screen`).innerHTML = `Height: ${addDecimal(pokemon.height)}m
        Weight: ${addDecimal(pokemon.weight)}kg
        `
      })
  })
})



// Joke event starts here 


// Click event to generate random joke/quote
document.getElementById('random').addEventListener('click', event => {
  event.preventDefault()

  // each event will be set to a random number and the click will generate random number 
  let randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)
  const quoteElem = document.getElementById('quote')
  const setupElem = document.getElementById('setup')
  const jokeElem = document.getElementById('joke')
  let i = 0
  let speed = 10


  if (randomNumber === 0) {

    axios.get(`https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes`)
      .then(res => {
        console.log(res)

        // Grabbing info from API and setting into strings
        let punchline = res.data.punchline
        let setup = res.data.setup
        let words = `${setup} - ${punchline}`

        // Resetting innerHTMl to blank before new text is generated
        setupElem.innerHTML = ''
        quoteElem.innerHTML = ''
        jokeElem.innerHTML = ''

        // // type writer function
        function typeWriter() {
          if (i < words.length) {
            document.getElementById("setup").innerHTML += words.charAt(i)
            i++
            setTimeout(typeWriter, speed)
          }
        }
        // initiation of type writer function for dad joke
        typeWriter()

      })
    // .catch(err => console.log(err));

  } else if (randomNumber === 1) {
    // axios get for other joke
    axios.get(`https://api.quotable.io/random`)
      .then(res => {
        console.log(res)
        // Grabbing info from API and setting into strings
        let quote = res.data.content

        // Resetting innerHTMl to blank before new text is generated
        quoteElem.innerHTML = ''
        setupElem.innerHTML = ''
        jokeElem.innerHTML = ''

        console.log(quote)
        // // type writer function
        function typeWriter2() {
          if (i < quote.length) {
            document.getElementById("quote").innerHTML += quote.charAt(i)
            i++
            setTimeout(typeWriter2, speed)
          }
        }
        // intiation for type writer function for random quote
        typeWriter2()

      })
      .catch(err => console.log(err))
  } else {
    axios.get(`https://geek-jokes.sameerkumar.website/api?format=json`)
      .then(res => {
        console.log(res)
        // Grabbing info from API and setting into strings
        let joke = res.data.joke

        // Resetting innerHTMl to blank before new text is generated
        quoteElem.innerHTML = ''
        setupElem.innerHTML = ''
        jokeElem.innerHTML = ''

        // type writer function
        function typeWriter3() {
          if (i < joke.length) {
            document.getElementById("quote").innerHTML += joke.charAt(i)
            i++
            setTimeout(typeWriter3, speed)
          }
        }
        // initiation of type writer function for random joke
        typeWriter3()

      })
      .catch(err => console.log(err))
  }

})




// allows initialization for modals and nav bar for materialize 
M.AutoInit()

// lowers audio volme when audio is played
let audio = document.getElementById("audio");
audio.volume = 0.1;
let pokeList = document.getElementById("pokeList")
let addDecimal = (num) => { return (num / 10).toFixed(1) }
let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
let quoteElem = document.getElementById("quote")
let setupElem = document.getElementById("setup")
let jokeElem = document.getElementById("geekJoke")

// grabbing array from localStorage and setting it to caughtPokemonArr variable. If array does not exist, sets it to empty array. Parse with JSON.parse so a real array is returned, not a string array
let caughtPokemonArr = JSON.parse(localStorage.getItem("caughtPokemonArr")) || []

// loop for array and rendering onto list 
caughtPokemonArr.forEach((pokemon) => {
  let listElem = document.createElement("ul")
  listElem.className = "collection-item waves-effect z-depth-1"
  listElem.innerHTML = `
  <a class="btn-flat"><h6>${pokemon}</h6></a>
  <a class="btn-flat delete right" id="deleteFromPokedex"><i class="material-icons">cancel</i></a>
  `
  document.getElementById("pokeList").append(listElem)
  //delete pokemon from pokedex
  // document.getElementById("deleteFromPokedex").addEventListener("click", event => {
  //   function deletePokemon() {
  //     let existingPokemon = JSON.parse(localStorage.getItem("caughtPokemonArr"))
  //     existingPokemon.splice(index, 1)
  //     localStorage.setItem("caughtPokemonArr", JSON.stringify(existingPokemon))
  //   }
  //   deletePokemon()
  // })
})

// generator value from user mouse clicks
let pokeCollection = document.querySelectorAll(".collection-item");
pokeCollection.forEach(item => {
  item.addEventListener("click", event => {
    let valueCheck = event.target.firstChild.textContent
    let buttonElem = event.target.id
    event.preventDefault()
    // using generated value from mouse clicks to grab Pokemon information from Pokemon API
    axios.get(`https://pokeapi.co/api/v2/pokemon/${valueCheck}`)
      .then(res => {
        let pokemon = res.data
        let svg = pokemon.sprites.other.dream_world.front_default
        document.getElementById('random').style.display = 'block'
        //if more than 1 type
        if (pokemon.types.length > 0) {
          //if only one type  
          if (pokemon.types.length == 1) {
            //display 1 type
            document.getElementById("type-screen").innerHTML = `Type: ${capitalize(pokemon.types[0].type.name)}`
          }
          else {
            //display 2 types
            document.getElementById("type-screen").innerHTML = `Type: ${capitalize(pokemon.types[0].type.name)} ${capitalize(pokemon.types[1].type.name)}`
          }
        }
        // adds information onto pokedex from pokemon API
        document.getElementById("main-screen").innerHTML = `
        <img class="sprites" src="${svg}" alt="${pokemon.species.name}">
        `
        document.getElementById("name-screen").innerHTML = `${capitalize(pokemon.species.name)}
        `
        document.getElementById("about-screen").innerHTML = `Height: ${addDecimal(pokemon.height)}m
        Weight: ${addDecimal(pokemon.weight)}kg
        `
        //clears interact box 
        quoteElem.innerHTML = ""
        setupElem.innerHTML = ""
        jokeElem.innerHTML = ""
        //stop typewriter 

      })
  })
})

// Joke event starts here 

// Click event to generate random joke/quote
document.getElementById("random").addEventListener("click", event => {
  event.preventDefault()
  // each event will be set to a random number and the click will generate random number 
  let randomNumber = Math.floor(Math.random() * 3)
  let i = 0
  let speed = 10

  if (randomNumber === 0) {
    axios.get("https://icanhazdadjoke.com/", {
      headers: { "Accept": "application/json" },
    })
      .then(res => {
        let dadJoke = res.data.joke
        quoteElem.innerHTML = ""
        setupElem.innerHTML = ""
        jokeElem.innerHTML = ""
        // typewriter function
        function typeWriter() {
          if (i < dadJoke.length) {
            document.getElementById("setup").innerHTML += dadJoke.charAt(i)
            i++
            setTimeout(typeWriter, speed)
          }
        }
        // initiation of type writer function for dad joke
        typeWriter()
      })
  } else if (randomNumber === 0) {
    // axios get for other joke
    axios.get("https://api.quotable.io/random")
      .then(res => {
        // Grabbing info from API and setting into strings
        let quote = res.data.content
        quoteElem.innerHTML = ""
        setupElem.innerHTML = ""
        jokeElem.innerHTML = ""
        // type writer function
        function typeWriter() {
          if (i < quote.length) {
            document.getElementById("quote").innerHTML += quote.charAt(i)
            i++
            setTimeout(typeWriter, speed)
          }
        }
        // intiation for type writer function for random quote
        typeWriter()
      })
      // .catch(err => console.log(err))
  } else {
    axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
      .then(res => {
        // Grabbing info from API and setting into strings
        let joke = res.data.joke
        quoteElem.innerHTML = ""
        setupElem.innerHTML = ""
        jokeElem.innerHTML = ""
        // type writer function
        function typeWriter() {
          if (i < joke.length) {
            document.getElementById("geekJoke").innerHTML += joke.charAt(i)
            i++
            setTimeout(typeWriter, speed)
          }
        }
        // initiation of type writer function for random joke
        typeWriter()
      })
      .catch(err => console.log(err))
  }
})
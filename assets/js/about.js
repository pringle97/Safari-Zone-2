// allows initialization for modals and nav bar for materialize
// eslint-disable-next-line no-undef
M.AutoInit()

// lowers audio volme when audio is played
const audio = document.getElementById("audio")
audio.volume = 0.1

// values from pokedex
const interactElem = document.getElementById("interact")
const nameScreen = document.getElementById("name-screen")
const aboutScreen = document.getElementById("about-screen")
const typeScreen = document.getElementById("type-screen")
const idScreen = document.getElementById("id-screen")
const mainScreen = document.getElementById("main-screen")

// grabs innerHTML and displays text on screen with type writer effect
function typeWriter (i, words, speed) {
  if (i < words.length) {
    document.getElementById("interact").innerHTML += words.charAt(i)
    i++
    setTimeout(typeWriter, speed, i, words, speed)
  }
}

// click event to display Alans information
document.getElementById("alan").addEventListener("click", () => {
  nameScreen.innerHTML = "Alan Truong"
  aboutScreen.innerHTML = "Height: 1.65m Weight: 58.97kg"
  typeScreen.innerHTML = "Type: Psychic"
  idScreen.innerHTML = "#7"
  mainScreen.innerHTML = "<img class=\"pictures\" src=\"assets/pictures/alanPic.jpg\">"
  interactElem.innerHTML = ""
  typeWriter(0, "Hello, I’m Alan. My favorite hobbies are gaming and eating. Some games that I enjoy playing are league of legends, csgo, and apex.", 10)
})

// click event to display Kevins information
document.getElementById("kevin").addEventListener("click", () => {
  nameScreen.innerHTML = "Kevin Kelley"
  aboutScreen.innerHTML = "Height: 1.80m Weight: 64.86kg"
  typeScreen.innerHTML = "Type :Normal"
  idScreen.innerHTML = "#88"
  mainScreen.innerHTML = "<img class=\"pictures\" src=\"assets/pictures/kevinPic.jpg\">"
  interactElem.innerHTML = ""
  typeWriter(0, "Hi. I like Pokemon. Why you ask? Oh you didn't ask? Okay. I'm going to go now.", 10)
})

// click event to display Malia information
document.getElementById("malia").addEventListener("click", () => {
  nameScreen.innerHTML = "Malia Pringle"
  aboutScreen.innerHTML = "Height: 1.63m Weight: 70.3kg"
  typeScreen.innerHTML = "Type: Water"
  idScreen.innerHTML = "#27"
  mainScreen.innerHTML = "<img class=\"pictures\" src=\"assets/pictures/maliaPic.jpg\">"
  interactElem.innerHTML = ""
  typeWriter(0, "Hey there! Thanks for checking out our project! I recently graduated from a full stack web development boot camp and I'm periodically adding new features to this project. I am also searching for work. Please feel free to reach out!", 10)
})

// click event to grab Nathan information
document.getElementById("nathan").addEventListener("click", () => {
  nameScreen.innerHTML = "Nathan Montelli"
  aboutScreen.innerHTML = "Height: 1.83m Weight: 70.3kg"
  typeScreen.innerHTML = "Type: Grass/Rock"
  idScreen.innerHTML = "#92"
  mainScreen.innerHTML = "<img class=\"pictures\" src=\"assets/pictures/nathanPic.jpg\">"
  interactElem.innerHTML = ""
  typeWriter(0, "Hello, I'm Nathan. I'm currently a student in the UCI coding bootcamp. Some of my favorite things to do are travel, try out new restaurants, rock climb, and garden.", 10)
})

// click event to grab Peters information
document.getElementById("peter").addEventListener("click", () => {
  nameScreen.innerHTML = "Peter Song"
  aboutScreen.innerHTML = "Height: 1.72m Weight: 65.77kg"
  typeScreen.innerHTML = "Type: Electric"
  idScreen.innerHTML = "#9"
  mainScreen.innerHTML = "<img class=\"pictures\" src=\"assets/pictures/peterPic1.jpg\">"
  interactElem.innerHTML = ""
  typeWriter(0, "Hey! My name is Peter Song. My favorite hobbies are sports activites(Rock Climbing, Basketball, Football and Badminton) and video games(Currently League of Legends and Destiny 2).", 10)
})

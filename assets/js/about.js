// allows initialization for modals and nav bar for materialize
M.AutoInit()

// lowers audio volme when audio is played
let audio = document.getElementById(`audio`);
audio.volume = 0.1;

// constant values 
const interactElem = document.getElementById(`interact`)
const nameElem=document.getElementById(`name-screen`)
const aboutElem = document.getElementById(`about-screen`)
const typeElem = document.getElementById(`type-screen`)
const idElem = document.getElementById(`id-screen`)


// click event to grab Alans information
document.getElementById(`alan`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Alan Truong`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.65m Weight: 58.97kg`
  document.getElementById(`type-screen`).innerHTML =`Type: Psychic`
  document.getElementById(`id-screen`).innerHTML =`#7`
  document.getElementById(`main-screen`).innerHTML = `<img class="pictures" src="assets/pictures/alanPic.jpg">`

  // type writer values
  let i = 0;
  let speed = 10;
  let words = `Hello, I’m Alan. My favorite hobbies are gaming and eating. Some games that I enjoy playing are league of legends, csgo, and apex.`
  interactElem.innerHTML = ``
  
  // type writer function that grabs innerHTML to create type writer effect
  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()


})

// click event to grab Kevins information
document.getElementById(`kevin`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Kevin Kelley`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.80m Weight: 64.86kg`
  document.getElementById(`type-screen`).innerHTML =`Type :Normal`
  document.getElementById(`id-screen`).innerHTML =`#88`
  document.getElementById(`main-screen`).innerHTML = `<img class="pictures" src="assets/pictures/kevinPic.jpg">`

  // type writer values
  let i = 0;
  let speed = 10;
  let words = `Hi. I like Pokemon. Why you ask? Oh you didn't ask? Okay. I'm going to go now.`
  interactElem.innerHTML = ``

  // type writer function that grabs innerHTML to create type writer effect
  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()
})

// click event to grab Malia information
document.getElementById(`malia`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Malia Pringle`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.63m Weight: 70.3kg`
  document.getElementById(`type-screen`).innerHTML =`Type: Water`
  document.getElementById(`id-screen`).innerHTML =`#27`
  document.getElementById(`main-screen`).innerHTML = `<img class="pictures" src="assets/pictures/maliaPic.jpg">`

  // type writer values
  let i = 0;
  let speed = 10;
  let words = `Hey there! Thanks for checking out our project! I recently graduated from a full stack web development boot camp and I'm searching for work. Please feel free to reach out! I really enjoy Node.js and working with databases.`
  interactElem.innerHTML = ``

  // type writer function that grabs innerHTML to create type writer effect
  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()
})

// click event to grab Nathan information
document.getElementById(`nathan`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Nathan Montelli`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.83m Weight: 70.3kg`
  document.getElementById(`type-screen`).innerHTML =`Type: Grass/Rock`
  document.getElementById(`id-screen`).innerHTML =`#92`
  document.getElementById(`main-screen`).innerHTML = `<img class="pictures" src="assets/pictures/nathanPic.jpg">`

  // type writer values
  let i = 0;
  let speed = 10;
  let words = `Hello, I'm Nathan. I'm currently a student in the UCI coding bootcamp. Some of my favorite things to do are travel, try out new restaurants, rock climb, and garden.`
  interactElem.innerHTML = ``

  // type writer function that grabs innerHTML to create type writer effect
  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()
})

// click event to grab Peters information
document.getElementById(`peter`).addEventListener(`click`, () => {
  document.getElementById(`name-screen`).innerHTML =`Peter Song`
  document.getElementById(`about-screen`).innerHTML =`Height: 1.72m Weight: 65.77kg`
  document.getElementById(`type-screen`).innerHTML =`Type: Electric`
  document.getElementById(`id-screen`).innerHTML =`#9`
  document.getElementById(`main-screen`).innerHTML =`<img class="pictures" src="assets/pictures/peterPic1.jpg">`
  
  
  // type writer values
  let i = 0;
  let speed = 10;
  let words = `Hey! My name is Peter Song. My favorite hobbies are sports activites(Rock Climbing, Basketball, Football and Badminton) and video games(Currently League of Legends and Destiny 2).`
  interactElem.innerHTML = ``

  // type writer function that grabs innerHTML to create type writer effect
  function typeWriter() {
    if (i < words.length) {
      document.getElementById(`interact`).innerHTML += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()


})


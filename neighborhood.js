console.log('test')

let rndButton = document.querySelector('#rndBtn')
let restaurantDiv = document.querySelector('#rndRest')

let restaurants = ["Betos", "Whistle Wok", "Don Joaquin Street Tacos", "Super Chix", "Burgers & Barley"]
const randomNum = Math.floor(Math.random() * restaurants.length);

const generateRandom = (e) => {
    restaurantDiv.textContent = restaurants[randomNum]
}

rndButton.addEventListener('click', generateRandom)
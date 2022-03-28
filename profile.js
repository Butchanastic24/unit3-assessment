console.log("test")

let favoriteColor = document.querySelector('#color')
let favoritePlace = document.querySelector('#place')
let favoriteRitual = document.querySelector('#ritual')

const colorAlert = (e) => {alert('My favorite color is Seafoam Green')}
const placeAlert = (e) => {alert('My favorite place is Maui')}
const ritualAlert = (e) => {alert('My favorite ritual is jumping in place before a workout')}

favoriteColor.addEventListener("click", colorAlert)
favoritePlace.addEventListener("click", placeAlert)
favoriteRitual.addEventListener("click", ritualAlert)
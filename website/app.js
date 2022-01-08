/* Global Variables */
const apiKey = `584befef1f6116016438014a9b30ff2a`;
const zipCode = document.getElementById("zip").value;
const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=imperial`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
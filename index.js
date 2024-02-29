/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("card-input")
const meterFeetEl = document.getElementById("meter-feet")
const litersGallonsEl = document.getElementById("liters-gallons")
const kilosToPoundsEl = document.getElementById("kilosToPound")
const btnEl = document.getElementById("card-btn")


btnEl.addEventListener("click", () => {
    let inputAsNum = Number(inputEl.value)
    if (isNaN(inputAsNum)) {
    alert("Please enter a number")
}
    metersToFeet(inputAsNum)
    litersToGallons(inputAsNum)
    kiloToPound(inputAsNum)
}
)

function metersToFeet(meter) {
    const feet = meter * 3.281
    meterFeetEl.textContent = `${meter} meters = ${feet.toFixed(2)} feet | ${meter} feet = ${(meter / 3.281).toFixed(2)} meters`
}

function litersToGallons(liter) { 
    const gallon = liter * 0.264
    litersGallonsEl.innerHTML = `${liter} liters = ${gallon.toFixed(2)} gallons | ${liter} gallons = ${(liter * 3.281).toFixed(2)} liters`;

}

function kiloToPound(kilogram) {
const pound = kilogram * 2.204;
    kilosToPoundsEl.innerHTML = `${kilogram} kilos = ${pound.toFixed(2)} pounds | ${kilogram} pounds = ${(kilogram / 2.204).toFixed(2)} kilos`;

}
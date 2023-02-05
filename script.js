/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const divOne=document.getElementById("container-one")
    let text="Convert"
    let abutton=`<br><button id="btn"> ${text} </button>`
    divOne.innerHTML+=abutton

const convertButton=document.getElementById("btn")
const textBox=document.getElementById("box")
const lengthConvert=document.getElementById("length")
const volumeConvert=document.getElementById("volume")
const massConvert=document.getElementById("mass")



convertButton.addEventListener("click", ()=>{
const a= textBox.value
const meterToFeet= parseFloat(a * 3.281).toFixed(2)
const FeetToMeter= parseFloat(a/3.281).toFixed(2)
lengthConvert.textContent=`${a} meters= ${meterToFeet} feet | ${a} feet= ${FeetToMeter} meters`
const litreToGallon= parseFloat(a * 0.264).toFixed(2)
const gallonToLitre=parseFloat(a / 0.264).toFixed(2)
volumeConvert.textContent=`${a} liters= ${litreToGallon} gallons | ${a} gallons= ${gallonToLitre} liters`
const kilosToPounds= parseFloat(a * 2.204).toFixed(2)
const poundsToKilos=parseFloat(a / 2.204).toFixed(2)
massConvert.textContent=`${a} kilos= ${kilosToPounds} pounds | ${a} pounds= ${poundsToKilos} kilos`
})

 

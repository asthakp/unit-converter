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
console.log(textBox)
console.log(lengthConvert)
console.log(volumeConvert)
console.log(massConvert)

convertButton.addEventListener("click", ()=>{

})
//variables
let values = []
let number='';
let calc='';
let lastcalc=false
const showvalue = document.querySelector('#show-value')
const btnmultiple=document.querySelector('#multiple')
const btnclear = document.querySelector('#c')
const btnback = document.querySelector('#back')
const btnmines = document.querySelector('#mines')
const btnsum = document.querySelector('#sum')
const btndivision = document.querySelector('#division')
const btnone = document.querySelector('#one')
const btntwo = document.querySelector('#two')
const btnthree = document.querySelector('#three')
const btnfour = document.querySelector('#four')
const btnfive = document.querySelector('#five')
const btnsix = document.querySelector('#six')
const btnseven = document.querySelector('#seven')
const btneight = document.querySelector('#eight')
const btnzero = document.querySelector('#zero')
const btnnine = document.querySelector('#nine')
const btnaction=document.querySelector('#action')
//event listeners
eventlisteners()
function eventlisteners() {
    btnclear.addEventListener('click', clear)
    btnone.addEventListener('click', addToValues)
    btntwo.addEventListener('click', addToValues)
    btnthree.addEventListener('click', addToValues)
    btnfour.addEventListener('click', addToValues)
    btnfive.addEventListener('click', addToValues)
    btnsix.addEventListener('click', addToValues)
    btnseven.addEventListener('click', addToValues)
    btneight.addEventListener('click', addToValues)
    btnnine.addEventListener('click', addToValues)
    btnzero.addEventListener('click', addToValues)
    btnmultiple.addEventListener('click', calculate)
    btnmines.addEventListener('click', calculate)
    btndivision.addEventListener('click', calculate)
    btnsum.addEventListener('click', calculate)
    btnaction.addEventListener('click', action)
    btnback.addEventListener('click', back)
    window.addEventListener('load', clear)

}
//functions
function addToValues(e) {
    //console.log(JSON.parse(e.target.value) )
  
     number += e.target.value 
     showOnTimeValue(e.target.value)
}

function showOnTimeValue(value) {
    if(lastcalc){
        showvalue.value=''
        lastcalc=false
    }
    showvalue.value += value
    //console.log(value)
}

 function calculate(e){
 //console.log(e.target.value)
 if(calc===''){
   
    values.push(JSON.parse(number))
    calc=e.target.value
    showvalue.value += e.target.value
    number=''

 }
 else{

 }
 }
function action(){
    values.push(JSON.parse(number))
    let finishednum=0
    switch(calc){
        case "+":finishednum=sum(values[0],values[1]) 
        break;
        case "-":finishednum=mines(values[0],values[1]) 
        break;
        case "*":finishednum=multiple(values[0],values[1])
        break;
        case "/":finishednum=division(values[0],values[1])
        break;
        default:console.log('nothung')
      

    }
    console.log(values)
    values=[]
    number=''
    calc=''
    lastcalc=true
    showvalue.value +=`=${finishednum}`
}




function clear(e) {
    values = []
    calc=''
    showvalue.value = ''
}



function test(e) {
    console.log('sum')
}
function sum(a, b) { 
    return a + b
}
function mines(a, b) {
    return a - b
}
function division(a, b) {
    return a / b
}
function division(a, b) {
    return a / b
}
function multiple(a, b) {
    return a * b
}
function back(){

number=''
if(values[0]){
    showvalue.value=values[0]
    if(calc){
        showvalue.value+=calc
    }
}
}


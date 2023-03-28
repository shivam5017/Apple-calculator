let decimal=require("decimal.js")

let x=0.1//first value
let y=0.2//second value

let a = decimal.add(x, y)
let value = new decimal(x).plus(y)
console.log(value) 

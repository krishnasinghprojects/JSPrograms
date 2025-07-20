const balance1 = 400 //Normal Method
const balance2 = new Number(100) //Constructor Method
console.log(balance1)
console.log(balance2)

const num=500.1234
const money=500000

//Number Operations
console.log(num.toFixed(2)) //Value Till Two Decimal Points
console.log(num.toPrecision(3))  //Value Till Two Significant Numbers
console.log(money.toLocaleString()) //Converts Number System Standards With Commas

//Number Properties
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//Maths Library
console.log(Math.abs(-5)) //Returns Absolute Value
console.log(Math.round(4/3)) //Round Off
console.log(Math.ceil(4.5)) //Round On To Upper Value
console.log(Math.floor(4.5)) //Round Off To Lower Value
console.log(Math.random()) //Important Method To Generate Random Numbers From 0 to 1
console.log(Math.floor(Math.random()*10)+1) //Random Number From 1 to 10

const min=10
const max=20
const range=max-min
console.log(Math.floor(Math.random()*(range+1)+min)) //10 to 20 Number Generation
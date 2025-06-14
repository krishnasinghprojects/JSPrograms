const InitialDate="January 1,1970" //Always Used Date
let date = new Date()
console.log(date) //Prints Date In Initial Format
console.log(date.toString()) //Prints Date In String Format
console.log(date.toLocaleString()) //Prints Date And Time Only 
console.log(date.toLocaleDateString()) //Prints Date Only
console.log(date.toLocaleTimeString()) //Prints Time Only

let personalDate = new Date(2007, 10, 28) //Dates
console.log(personalDate.toLocaleString())

let timestamp = Date.now()
console.log(timestamp) //Time In Millisecond
console.log(Math.floor(timestamp/1000)) //Time In Second

newDate=personalDate.toLocaleString('default',{weekday:"long", month:"long", year:"numeric"}) //Custom Date Format Print
console.log(newDate)
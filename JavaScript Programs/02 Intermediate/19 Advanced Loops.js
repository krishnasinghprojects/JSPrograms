//FOR OF LOOP
const arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element)
}

//FOR IN LOOP
const obj={1:"Krishna",2:"Singh"}
for (const key in obj) {
    console.log(obj[key])
}


//FOR EACH LOOP (Higher Order Function) : It Accepts a function refrence as a callback 
const array1=['a','b','c','d','e']
array1.forEach(element => {
    console.log(element)
});
// SYNTAX
/*
array.forEach(function (element) {
    console.log(element)
});
*/

//FILTER (Higher Order Function) : Works Same As For Each Loop But Returns Result
const array2=[1,2,3,4,5,6,7,8,9,10]
let newArray=array2.filter( element => {return element>5} /*CONDITION*/) //Returns The Filtered Elements
console.log(newArray)

//Filter Exercises
const books=[
    {title:"Book 1",genre:"Fiction",publish:1991},
    {title:"Book 2",genre:"Non-Fiction",publish:1992},
    {title:"Book 3",genre:"Fiction",publish:1993},
    {title:"Book 4",genre:"Non-Fiction",publish:1994},
    {title:"Book 5",genre:"Fiction",publish:1995}
]
const userBooks=books.filter(element => {
    return element.genre === "Fiction"
})
console.log(userBooks) //Filter Applied On Genre

//MAP (Higher Order Function) : Returns All Values By Changing
const array3=[1,2,3,4,5]
const newNums= array3.map( element => {return element+10})
console.log(newNums) //All Elements Value Increased By 10

//REDUCE (Higher Order Function) : Gives two values accumulator and current value to callback function to be worked on
const array4=[1,2,3,4,5,6,7,8,9,10]
const mySum = array4.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0)
console.log(mySum)

//Chaining is defined as applying multiple HOFs on same array.
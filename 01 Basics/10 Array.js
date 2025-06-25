//Note : Array in JS can be modified
//Note : Array in JS create shallow copy (Copy By Refrence)

const arr1= [1,2,3,4,5] //Normal Method
const arr2= new Array(1,2,3,4,5) //Constructor Method

console.log(arr1)
console.log(arr2)

//Array Methods

arr1.push(6) //Adds a value in end to an array
console.log(arr1)

arr2.pop() //Removes a value from end
console.log(arr2)

arr1.unshift(50) //Adds a value in start to an array
console.log(arr1)

arr2.shift() //Removes a value in start to an array
console.log(arr2)

console.log(arr1.indexOf(10)) //Checks Index Of First Occurance 
console.log(arr1.includes(10)) //Checks Number Exists Or Not
console.log(arr1.join()) //Returns in String Format

console.log("A: ",arr1)
const newArr1=arr1.slice(0,2) //Created A New Array Of Subset
console.log(newArr1)
console.log("B: ", arr1) //Original Array Unchanged Due to Slice

console.log("A: ",arr1)
const newArr2=arr1.splice(0,2) //Created A New Array Of Subset
console.log(newArr2)
console.log("B: ", arr1) //Original Array Divides Due To Splice

//Array Combination
const a=[1,2,3]
const b=[4,5,6]
//const c=a+b // Does Not Work Converts Into String 
//console.log(c)
//a.push(b)
//console.log(a) // Does Not Work Includes All Elements As One
//const c=a.concat(b)
//console.log(c) //Works But Only Add 2 At A Time
const c=[...a,...b] //"...VARIABLE_NAME" Destructures The Array
console.log(c)

const array=[1,2,3,[4,5,6],[7,8,9,[1,2,3]]] //Multi-Dimension Array
const readable_array=array.flat(Infinity)
console.log(readable_array)

console.log(Array.isArray("Krishna"))//Checks If Data Is Array
console.log(Array.from("Krishna"))//Converts Into Array
console.log(Array.of(1,2,3,4,5,6,7,8,9))//Converts Multiple Values Into Array
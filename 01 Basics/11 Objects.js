 //Objects can be created via two methods - Literals and Constructors
 //Constructor created objects are singleton and are unique
 //Literals created objects are not singleton and they have multiple instances


//LITERAL METHOD
const user={
    name:"1234" //Key-Value Pair where key is a string
}

console.log(user.name) 
console.log(user["name"]) //Useful when there is space in keys

//How to use symbol as a key
const sym=Symbol("KEY")
const user1={
    name:"ABCD",
    sym:"Krishna", //Does not work as sym is passed as string
    [sym]:"Krishna" //Works as now sym value "KEY" is passed
}
console.log(user1)

Object.freeze(user1) //No change from now on frozen
user1.name="PQRS" //Change wont work
console.log(user1.name) 

user.greet = function() //Function in an object
{
    console.log(`Hello ${this.name}`) //this refers to object
}
console.log(user.greet()) //Function being called
console.log(user.greet) //Function refrence printed
 
//CONSTRUCTOR METHOD
const userdata= new Object() //Singleton Object
userdata.id='1'
userdata.name="Krishna"
console.log(userdata)

const nestedObj= //Object inside object
{
    email:"krishnasinghprojects@gmail.com",
    userFullName:{
        firstname:"Krishna",
        lastname:"Singh"
    }
}
console.log(nestedObj.userFullName)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3=Object.assign({},obj1,obj2) //Assign Method (target,source)
const obj4={...obj1,...obj2} //Destructure Method
console.log(obj4)

//Objects inside array
users=[
    {
        id:1,
        value:10
    },
    {
        id:2,
        value:20
    },
    {
        id:3,
        value:30
    }
]
console.log(users)
console.log(users[1].id)

console.log(Object.keys(user)) //Returns as array to be used in loop
console.log(Object.entries(user)) //Returns as array inside an array with key value pair

//Desturcturing of Object
const course={
    courseName:"JavaScript",
    price:"FREE",
    courseInstructor:"Krishna"
}
const {courseInstructor : Teacher} = course //Destructuring
console.log(Teacher)


//JSON : Java Script Object Notation
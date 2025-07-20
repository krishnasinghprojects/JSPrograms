//Arrow Function Declaration
const sayHello = ()=>{
    let name="Krishna"
    console.log(this);
}
sayHello() //In arrow functions this is an empty object

const func = () => {}; //Basic Syntax
const add = (a,b) => (a+b); //Implicit return doesnt requrie return keyword

//IIFE Immediately Invoked Function Expressions

(function add(a,b){
    console.log(a+b) // Function Declaration
})(5,10); //Immediate Function Call 

//To Complete one IIFE function call ; is nessesary 

((a,b) => {
    console.log(a+b) // Function Declaration
})(5,10) //Immediate Function Call
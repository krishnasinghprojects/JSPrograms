function sayHello1() //Function Declaration
{
    console.log("Hello World !");
}
sayHello1() //Function Call

function addNumbers(a,b)
{
    console.log(a+b) //Logs The Value Directly
    return a+b; //Gives Value To Store In Variable
    console.log(Hello) //Function Stops Working After Return
}
a=5
b=10
c=addNumbers(a,b) //Function Logs a+b and also stores rerturned value
console.log(`C : ${c}`)

function addNumbers(a=0,b=0) //Default case parameter
{
    return a+b; //Gives Value To Store In Variable
}

c=addNumbers() //No parameters passed taking default case
console.log(`C : ${c}`)

function calculateAmount(...amount){
    return amount
}
console.log(calculateAmount(200,400,800,1600))


//Function writing methods

sayHi() //Will work as it is defined using keyword and function can be accessed from anywhere
// sayHello() //Wont work as variable of function is defined later so JS thinks it as undefined
//Function Declaration with keyword
function sayHi()
{
    console.log("Hi!");
}
//Function Declaration with variable
const sayHello=function(){
    console.log("Hi!");
}
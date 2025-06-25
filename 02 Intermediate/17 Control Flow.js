//Control Flow controls the flow of program via conditionals 


//IF-ELSE Statement
let a=50
if(a==5) //Checks the condition by evaluating the expression as true or false
{
    console.log("A is 5")
}
else if(a==0){
    console.log("A is ZERO")
}
else{
    console.log("Krishna Is Present")
}

//Comparatory Operator
//== Equality Comparison
//=== Equality With Type Comparison
//!= Unequality Comparison
//> Greater Than
//< Less Than
//>= Greater Than Or Equal
//<= Less Than Or Equal

//Logical Operator
//&& Checks if both conditions are true
//|| Checks if any one condition is true


//SWITCH CASE Statement - Useful when one value is to be checked with multiple
let b=5
switch (b) {
    case 1:
        console.log("Hello 1")
        break;
    case 2:
        console.log("Hello 2")
        break;
    case 3:
        console.log("Hello 3")
        break;
    case 4:
        console.log("Hello 4")
        break;
    case 5: //Key Matches With Value Hence Printed
        console.log("Hello 5")
        break;
    default: //If No Value Matches
        break;
}
//In case break is important because if break isnt present it will print all the cases except DEFAULT


//True Values : "0", 'false', " ", [], {}, function(){}
//False Values : false, 0, -0, 0n, "", null, undefined, NaN

//Nullish Coalescing Operator (??) : Works For Null And Undefined Only
let userName = null //Or undefined;
let displayName = userName ?? "Guest"; //Will Assign As Guest If Username Is Null or Undefined

//Ternary Operator : If Else For True Or False Conditions
//condition ? true : false


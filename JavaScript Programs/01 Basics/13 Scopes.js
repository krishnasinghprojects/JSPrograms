//Global Scope Variables
let a = 10
const b = 20
var c = 30
//Global scope variables can be used in block scope but not vice-versa.

console.log(a);
console.log(b);
console.log(c);

{ } //Block Scope

if (true) {
    let x = 10
    const y = 20
    var z = 30 //It will get printed others will throw errors hence var is avoided.
}
//Here x y following block scope but z as var follows global scope
//console.log(x);
//console.log(y);
console.log(z);

function parent(){
    const name= "Krishna"
    function child(){
        const id= "12345"
        console.log(name) //Name can be accessed as parent is global for child
    }
    //console.log(id); //id cannot be accessed as it is local variable of child
    child()
}
parent()



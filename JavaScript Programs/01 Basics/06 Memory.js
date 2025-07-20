// STACK (Primitive Data Types), HEAP (Non-Primitive Data Types)

//Primitive copies the data from one variable to another
let username="Krishna";
let anotherName=username;
anotherName="KS"

console.log(username)
console.log(anotherName)
//Change reflected on copy only

//Non-Primitive sends the refrence of one variable to another

let user={userId:"krishnasinghprojects"}
let anotherUser=user
anotherUser.userId="krishnasingh"

console.log(user.userId)
console.log(anotherUser.userId)
//Change reflected on both
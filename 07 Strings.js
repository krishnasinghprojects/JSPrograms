const username = "Krishna"
const age = 18

console.log(username+age) //String Concatenation
console.log(`Hello my name is ${username} and my age is ${age}.`) //String Interpolation [Embedding]
const user = new String("KrishnaSingh") //Constructor


//String Operations
console.log(user.length) //Length Of Characters Of String
console.log(user.toUpperCase()) //Uppercase Entire String
console.log(user.charAt(0)) //Character At An Index
console.log(user.indexOf('K')) //Index Of First Occurance
console.log(user.substring(0,7)) //Substring From Start Index To Index Before Ending
console.log(user.slice(0,-5)) //Similar As Substring But Allows Negative Indexing
console.log("  Hello  ".trim()) //Trims Extra Spaces
console.log(user.replace("Singh","Projects")) //Replaces Substring To Another String
console.log(user.includes("Krishna")) //Checks If Substring Is Present Or Not
console.log("1 2 3 4 5".split(' ')) //Split On Basis Of Splitter Here Space
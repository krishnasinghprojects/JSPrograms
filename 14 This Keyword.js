//THIS Keyword
const user = {
    username: "Krishna",
    welcomeUser: function() {
        console.log(`${this.username} , Welcome`) //This refers to current context
    }
    
}
user.welcomeUser()
user.username="KS" //Changed the context value
user.welcomeUser()

//Difference between Node Environment And Browser
console.log(this) //Empty in Node
console.log(this) //Window Object in Browser


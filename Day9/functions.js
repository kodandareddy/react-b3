// function sayHello(name,age){
//     console.log(`Hello Every one ${name}`)

// }

// sayHello()

// function Multi(a,b){
// }

// var myValue=Multi(4,3)
// console.log(myValue)

// function returnString(){
//     console.log("My Name is Ram")

//     return "Hello Word"

// }

// console.log(returnString())

function myValue(number) {
  return number % 2 == 0 ? "Even" : "odd";
}

var myValue = returnEvenOrOdd(112);

// console.log(myValue);
//   1-I am One
//   2:I am Two

function returnMyValue(myNumber){

    
    if(parseInt(myNumber) ===1){
     return "I am One"
    }

    if(myNumber === 2){
     return "I am Two"
    }

    return "You are not in my Range"


}

console.log(returnMyValue(2)) 
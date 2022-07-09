var temp = 30;
// var myOutput=temp > 35
// console.log(myOutput)
// if(temp <= 40){
//   console.log("Temp is too high")
// }else{
//     console.log("Temp is too cool")
//  }
// temp++
// // or
// temp=temp+1
// let data=temp
// temp+=10

// // or
// temp=temp+10
// console.log(temp)

// var data=18

// data+=10

// console.log(data)

// if (temp != 40) {
//   console.log(`My value is ${temp}`);
// } else {
//   console.log("Not a matching value");
// }


// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn=false
var isEmailVerified=false
var isvalidCardinfo=false


//   if(isLoggedIn){
//     console.log("User is Logged in ")
//       if(isEmailVerified){
//         console.log("Email verified")
//         if(isvalidCardinfo){
//             console.log("you can make a purchase")
//         }
//       }
//   }

// if(isLoggedIn || isEmailVerified || isvalidCardinfo ){
//     console.log("User is Logged in ")
//     console.log("Email verified")
//     console.log("you can make a purchase")
// }else{
//     console.log("sorry no entry")
// }

var result
result = '' && 'foo';  
console.log(result)
result = 2 && 0;       
console.log(result)
result = 'foo' && 4; 
console.log(result)


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
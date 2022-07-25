// Pass bY value and pass by reference 

// let a=5 //123
// let b=a //345
// console.log(a)

//     // let a=6

// //chaging the value


// console.log(a)
// console.log(b)

// let user={
//     name:"Ram",
//     role:"admin"
// }//123


// let user1={...user}//321


// user1.name="Shyam"

// console.log(user.name)
// console.log(user1.name)

// let data=[1,2,4,4,5,6]


// let data1=data

// data1[0]=22


// console.log(data)
// console.log(data1)


// let data=[1,2,3,4]//123

// let data1=[...data]//324

// data[0]=22

// console.log(data)
// console.log(data1)

let data=[1,2,3]

let data1=[3,5,6]
let data4=[8,9,10]

let data3=['c','d',...data]
  

console.log(data3)

// let data={
//     name:"Ram",
//     add:"ascfssa"
// }

// let data1={
//     name:"shyam",
//     gender:"M"
// }


// console.log({...data1,...data})
//[1,2,3,4,5,6]

const str = 'Hello Ram';
const arr = [...str];
console.log(arr);

// https://daily-dev-tips.com/posts/10-ways-to-use-the-spread-operator-in-javascript/






function SumMyValue(a,...rest){
    console.log(a,rest)
//   return a+b+c+d+e+f
}

// https://www.geeksforgeeks.org/javascript-rest-operator/

console.log(SumMyValue(1,2,3,4,5,6))
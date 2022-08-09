// const myname="Ram"

//  function getData(){
//     const myname="Shyam"

//     console.log(myname)
// }

// {
//     const data="asdasd"
// }
// getData()
// console.log(data)
// // getData()

// function multiply(x,y) {
//     return x * y;
//  }

//  function squared(n) {
//       return multiply(n,n)
//    }

//  function printSquare(n) {
//     return squared(n)
//  }

//  let numberSquared = printSquare(5);
//  console.log(numberSquared);

// const uno=()=>{
//    return "one"
// }

// const dos=()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am Two")
//     },5000)
//    })
// }

// const tres=()=>{
//     return "there"
// }

// const callMe=async()=>{
//     console.log(uno())
//       try {
//         let data=await dos()
//        console.log(data,"---")
//       } catch (error) {
//         console.log(error,"++++")
//       }
//     console.log(tres())
// }

// callMe()

// const Api=async()=>{
//   let data=await fetch("https://jsonplaceholder.typicode.com/todos")
//    let data1=await data.json()
//    console.log(data1)
// }
// Api()

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{
//   return res.json()
// }).then((res1)=>{
//   console.log(res1)
// }).catch((err)=>{
//     console.log(err)
// })

// let user={
//      name:"ram",
//      role:"admin",
//      loginCount:123,
// }

// let {name:names,role,loginCount}=user

// console.log(loginCount,names,role)

// let [data,data1,data3]=['Ram',"shyam","babu"]

// console.log(data,data1,data3)

// let products={
//     productName:"lays",
//     price:124,
//     store:"Hyd Local store"
// }
// let {productName,price,store}=products
// console.log(productName,store,price)

// let data = [
//   {
//     productName: "lays",
//     price: 124,
//     store: "Hyd Local store",
//   },
//   {
//     productName: "lays1",
//     price: 1241,
//     store: "Hyd Local store1",
//   },
// ];
// let [myProduct,myProduct1]=data

// console.log(myProduct.productName,myProduct1.productName)


// function x(){
//   return()=>{
//     console.log(i)
//   }
//   var i=1
// }
// x()



// function pushAllZerosToEnd(myArray){
//     let count=0
//   for(let i=0;i<myArray.length;i++){
    
//     if(myArray[i]!=0){
//     myArray[count++]=myArray[i]
//     }
//   }
//   while(count<myArray.length){
//     myArray[count++]=0
//   }
//   console.log(myArray)
// }

// pushAllZerosToEnd([1, 2, 0, 0, 0, 3, 6])

// bubble sort



// function bubbleSort(myArr){


//     for(let i=0;i<myArr.length;i++){
//           for(let j=0;j<myArr.length-i-1;j++){
//             if(myArr[j]<myArr[j+1]){
//                 let temp=myArr[j]
//                 myArr[j]=myArr[j+1]
//                 myArr[j+1]=temp
//             }
//           }
//     }

//     console.log(myArr)


// }

// let data=[23,1,4,90,12]
// bubbleSort(data)


let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
let n = A.length;
let j = 0;



for(let i=0;i<n;i++){
    if(A[i]!=0){
        swap(A,i,j)
        j++
    }
}



function swap(A,i,j){
  let temp=A[i]
   A[i]=A[j]
   A[j]=temp
}

console.log(A)
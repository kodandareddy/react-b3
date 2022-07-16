// function printTriangle(n){
//   let row=1
//   while(row<=n){
//   let noOfStars=1
//   let myString=""
//     while(noOfStars<=row){
//         myString=myString+ '*' +' '
//         noOfStars=noOfStars+1
//     }
//     console.log(myString)
//     row=row+1
//   }
// }

// printTriangle(5)

// let count = -10;
// do {
//   console.log(count)
// } while(count > 0){
//     count+=count+1
// }

// const cars = [1, 2,3,4,5,6,7];

// for (let x of cars) {
//    if(!(x<=3)){
//     return
//    }
//    console.log(x)
// }


// var findMin = function(nums) {
//     let low=0
//     let high=nums.length-1
    
//     while(low<high){
//         let mid=Math.round((low+high)/2)
//         if(low == high){
//             return nums[0]
//         }
        
//         if(nums[mid]<nums[mid-1]){
//             return nums[mid]
//         }
        
//         if(nums[mid]>nums[mid+1]){
//             return nums[mid+1]
//         }
        
//         if(nums[mid]<nums[high]){
//             high=mid-1
//         }else{
//             low=mid+1
//         }
        
//     }
//     return nums[0]
// }

// console.log(findMin([2,1]))


const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {

}

console.log(txt)
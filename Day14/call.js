// const Ram={
//     firstName:"Kodanda Rama",
//     lastName:"Satti",
//     role:"Admin",
//     courseCount:1,
    
//     getInfo:function(login,logon1,login2){
//         console.log(login,logon1,login2)
//     //    console.log(`My name  is ${this.firstName} and i am a ${this.role} and my CourseCount is ${this.courseCount}`)
//     }
// } 


// const shyam={
//     firstName:"Shhyam",
//     lastName:"xyz",
//     role:"subdmin",
//     courseCount:3,
    
// }

// const shyam1={
//     firstName:"Shhyam2",
//     lastName:"saascsac",
//     role:"subdmin1",
//     courseCount:3,
// }
// let data=Ram.getInfo.bind(shyam1)

// data(1,4,45)

//  assignment
// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24));
// console.log(sayHi.bind(person, 24));

// https://roadsidecoder.hashnode.dev/javascript-interview-questions-call-bind-and-apply-polyfills-output-based-explicit-binding



let data={
    firstName:"Ram",
    getData:function(){
     console.log(this)
    }  
}
data.getData()

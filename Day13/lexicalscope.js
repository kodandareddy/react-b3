// function getdata() {
//   let name = "Ram";
//   function myName() {
//     return name;
//   }

//   return myName;
// }

// let data=getdata();
// console.log(data());


// https://www.javascripttutorial.net/javascript-closure/

// function myFunction() {
//     console.log(this)
// }
// myFunction();



let user = {
    name: "Piyush",
    age: 24,
    getDetails1(){
        console.log(this);
    },
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this);
          }
      }
  }

 let data= user.childObj.getDetails

 data()


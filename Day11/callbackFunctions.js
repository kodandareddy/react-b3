// Arrow Functions

// var data=function(){

// }

// var data=()=>{

// }
// var myFunction = () => {};

var isEvenAll = [2, 4, 7].every(()=>{

});

// console.log(isEvenAll);

var myData = (cb) => {
  console.log(cb,"++++");
  let value = 5;
  cb(value);
};

var getMyvalue = (val) => {
  console.log(val);
};

myData(getMyvalue);

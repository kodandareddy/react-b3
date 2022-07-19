var User=function(firstName,courseCount){
    this.firstName=firstName,
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`My Course Count ${this.courseCount}`)
    }
}

let use=new User("Ram",12)
use.getCourseCount()
let shyam=new User("shyam",122)
shyam.getCourseCount()
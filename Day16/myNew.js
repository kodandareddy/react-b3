const User1=require('./cls')

let user=new User1("Ram","Ram@gamil.com")
user.enrollCourse("angular")
console.log( user.getCourseList())
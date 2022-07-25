class User{
     constructor(name,email){
      this.name=name
      this.email=email
     }
     #courseList=[]
     enrollCourse(course){
       this.#courseList.push(course)
    }
    
    getInfo(){
      return `Name is ${this.name} and email is ${this.email}`  
    }
    getCourseList(){
        return this.#courseList
    }

}

module.exports=User
// let user1=new User("Shyam","Shyam@gamil.com")
//  user.enrollCourse('React')
// console.log(user.getInfo())
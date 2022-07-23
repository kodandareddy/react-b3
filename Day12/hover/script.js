// const red=document.querySelector('.red')
// const cyan=document.querySelector(".cyan")
// const violet=document.querySelector('.violet')
// const orange=document.querySelector('.orange')
// const pink=document.querySelector('.pink')

// const center=document.querySelector('.center')


// const getBgColor=(selectedElement)=>{
//    return window.getComputedStyle(selectedElement).backgroundColor
// }

// const magicColor=(element,color)=>{
//     element.addEventListener('mouseenter',()=>{
//         center.style.background=color
//     })

// }
// magicColor(red,getBgColor(red))
// magicColor(cyan,getBgColor(cyan))
// magicColor(violet,getBgColor(violet))
// magicColor(orange,getBgColor(orange))
// magicColor(pink,getBgColor(pink))

// let user={
//     name:"sads",
//     userDat:function(){
//       console.log('asf')
//     }
//   }
  
  
//   console.log(user) 

var User=function(fir){
  console.log(this)

  this.fir=fir

}

console.log( User("ascsa")) 
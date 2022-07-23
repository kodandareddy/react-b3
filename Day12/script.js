var counter=document.querySelector(".counter")

var followers=document.querySelector(".followers")


let count=0

setInterval(()=>{
 if(count<1000)
{
    count=count+1
    counter.innerHTML=count
}  
},1)



setInterval(() => {
    followers.innerHTML= followers.innerHTML ?"":"Followers"

}, 300);
 

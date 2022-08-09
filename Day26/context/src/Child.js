import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = (props,ref) => {
    console.log(ref)
   const[isShow,setIsShow]=useState(true)

   useImperativeHandle(ref,()=>({
     handleButtonClick:()=>{
        setIsShow(prev=>!prev)
     }
   }))
  return (
    <div>
       {isShow && <h2>Hide me</h2>}
      
    </div>
  )
}

export default forwardRef(Child)
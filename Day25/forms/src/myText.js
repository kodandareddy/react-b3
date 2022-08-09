import React from 'react'
import MyThird from './myThird'
const myText = (props) => {
    const{isShow}=props
  return (
    <div>
        <MyThird isShow={isShow}/>
    </div>
  )
}

export default myText
import React, { useState } from 'react'

const useToggle = (defaultValue) => {
  const[value,toggleValue]=useState(defaultValue)

  function increment(){
    toggleValue(prevValue=>prevValue+1)
  }
  function decrement(){
    toggleValue(prevValue=>prevValue-1)
  }
  return {value,increment,decrement}
}

export default useToggle
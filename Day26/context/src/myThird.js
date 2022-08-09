import React from 'react'

const myThird = ({isShow}) => {
  return (
    <div>
    {isShow ? <h1>Hide me</h1>:<h1>Show me</h1>}

    </div>
  )
}

export default myThird
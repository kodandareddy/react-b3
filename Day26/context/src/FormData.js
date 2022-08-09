import React from 'react'

const FormData = ({userName,amount,address}) => {
  return (
    <div>
        {userName}<br/>
        {amount}<br/>
        {address}
    </div>
  )
}

export default FormData
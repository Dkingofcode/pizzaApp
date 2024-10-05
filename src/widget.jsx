import React from 'react'

const Widget = ({ stack, level }) => {
  return (
    <div>
      <h4>{stack}</h4>
      <p>{level}</p>
    </div>
  )
}

export default Widget;

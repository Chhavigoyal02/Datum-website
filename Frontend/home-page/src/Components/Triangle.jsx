import React from 'react'
import './Triangle.css';

const Triangle = (props) => {
  const color = props.color;
  return (
    <div>
      <div className={`shape-${color}`}>
      </div>
    </div>
  )
}

export default Triangle

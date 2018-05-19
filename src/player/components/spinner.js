import React from 'react'
import './spinner.css'

function Spinner (props) {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <img src="./images/spinner.gif" width="80"/>
    </div>
  )
}

export default Spinner
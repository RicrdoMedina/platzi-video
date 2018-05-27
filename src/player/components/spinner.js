import React from 'react'

function Spinner (props) {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <img src="./images/spinner.gif"/>
    </div>
  )
}

export default Spinner

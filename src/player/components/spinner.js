import React from 'react'

function Spinner (props) {
  if (!props.active) return null
  return (
    <div className="Spinner">
      <img src="./images/spinner.gif" width="80"/>
    </div>
  )
}

export default Spinner
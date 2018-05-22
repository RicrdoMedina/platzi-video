import React from 'react'

function Modal (props) {
  return (
    <div className="Modal">
      { props.children }
      <button
        className="Modal-close"
        onClick = { props.handleClick }
      />
    </div>
  )
}

export default Modal

import React from 'react'

const Alert = (props) => {
  const { type, message, classDisplay } = props
  if (classDisplay) {
    setTimeout(() => {
      document.getElementById('alert').classList.remove(classDisplay)
    }, 4000)
  }
  return (
    <div id="alert" className = { `alert alert-${type} ${classDisplay}` }> { message } </div>
  )
}

export default Alert

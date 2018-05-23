import React from 'react'

const Alert = (props) => {
  const { type, message, display } = props
  return (
    <div className = { display === 'true' ? `alert alert-${type} show` : `alert alert-${type}` }> { message } </div>
  )
}

export default Alert

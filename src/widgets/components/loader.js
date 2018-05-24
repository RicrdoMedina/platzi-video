import React from 'react'
import imgSpinner from '../../../images/loader.gif'

const Loader = () => {
  return (
    <div id="spinner" className="content-spinner">
      <img className="spinner" src={ imgSpinner } alt="Spinner"/>
    </div>
  )
}

export default Loader

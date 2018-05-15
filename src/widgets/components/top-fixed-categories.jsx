import React from 'react'
import './top-fixed-categories.css'

function TopFixedCategories (props) {
  return (
    <div className="top-fixed-categories">
      {props.children}
    </div>
  )
}

export default TopFixedCategories

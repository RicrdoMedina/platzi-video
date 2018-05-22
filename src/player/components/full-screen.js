import React from 'react'
import FullScreenIcon from '../../icons/components/fullScreen'

const FullScreen = (props) => {
  return (
    <div className = "FullScreen"
         onClick = { props.handleFullScreenClick }
    >
      <FullScreenIcon
        size = { 25 }
        color = "white"
      />
    </div>
  )
}

export default FullScreen

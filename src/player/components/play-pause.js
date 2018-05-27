import React from 'react'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

function PlayPause (props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
          <button 
            onClick = { props.handleClick }
          >
            <Play size={ 20 } color="white" />
          </button>
          :
          <button
            onClick = { props.handleClick }
          >
            <Pause size={ 20 } color="white" />
          </button>
      }
    </div>
  )
}

export default PlayPause

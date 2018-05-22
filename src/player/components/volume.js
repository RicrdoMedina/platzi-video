import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import MuteIcon from '../../icons/components/mute'

function Volume (props) {
  return (
    <button className = "Volume">
      <div onClick = { props.handleVolumeToggle }>
        {
          props.volume ?
            <VolumeIcon
              color = "white"
              size = { 25 }
            />
            :
            <MuteIcon
              color = "red"
              size = { 25 }
            />
        }
      </div>
      <div className="Volume-range">
        <input
          type = "range"
          min = { 0 }
          max = { 1 }
          step = { .05 }
          onChange = { props.handleVolumeChange }
          value = { props.volume }
        />
      </div>
    </button>
  )
}

export default Volume

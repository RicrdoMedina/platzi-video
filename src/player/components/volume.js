import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import MuteIcon from '../../icons/components/mute'

function Volume (props) {
  return (
    <div className = "Volume">
      <div onClick = { props.handleVolumeToggle }>
        {
          props.volume ?
            <VolumeIcon
              color = "white"
              size = { 20 }
            />
            :
            <MuteIcon
              color = "red"
              size = { 20 }
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
    </div>
  )
}

export default Volume

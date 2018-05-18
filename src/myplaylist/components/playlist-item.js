import React, { PureComponent } from 'react'

class PlaylistItem extends PureComponent {
  render () {
    return (
      <li className = "playlist-item">
        <a className = "playlist-item-link" href="#">
          { this.props.title }
        </a>
      </li>
    )
  }
}

export default PlaylistItem

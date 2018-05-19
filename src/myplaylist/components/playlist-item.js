import React, { PureComponent } from 'react'

class PlaylistItem extends PureComponent {
  handleClick = (event) => {
    this.props.openModal(this.props)
  }
  render () {
    return (
      <li className = "playlist-item" onClick={ this.handleClick }>
        <a className = "playlist-item-link" href="#">
          { this.props.title }
        </a>
      </li>
    )
  }
}

export default PlaylistItem

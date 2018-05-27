import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class PlaylistFriendItem extends PureComponent {
  render () {
    return (
      <li className = "playlist-item">
        <a className = "playlist-item-link playlist-item-link--avatar" href = "#">
          <img className = "avatar avatar--size-large" src= { this.props.avatar } alt = "Avatar"/>
          { this.props.friend }
        </a>
      </li>
    )
  }
}

PlaylistFriendItem.propTypes = {
  friend: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

export default PlaylistFriendItem

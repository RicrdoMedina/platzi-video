import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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

PlaylistItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default PlaylistItem

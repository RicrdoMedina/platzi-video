import React, { Component } from 'react'
import MyPlaylistLayout from '../components/my-playlist-layout'
import Title from '../../utils/components/title'
import MyPlaylist from '../components/my-playlist'
import PropTypes from 'prop-types'

class MyPlaylistContainer extends Component {
  render () {
    return (
      <MyPlaylistLayout>
        <Title title="My Playlist"/>
        <MyPlaylist
          myplaylists = { this.props.myplaylists }
          handleOpenModal = { this.props.handleOpenModal }
        />
      </MyPlaylistLayout>
    )
  }
}

MyPlaylistContainer.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  myplaylists: PropTypes.array.isRequired
}

export default MyPlaylistContainer

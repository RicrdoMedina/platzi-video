import React, { Component } from 'react'
import MyPlaylistLayout from '../components/my-playlist-layout'
import Title from '../components/title'
import MyPlaylist from '../components/my-playlist'

class MyPlaylistContainer extends Component {
  render () {
    return (
      <MyPlaylistLayout>
        <Title title="My Playlist"/>
        <MyPlaylist myplaylists = { this.props.myplaylists } />
      </MyPlaylistLayout>
    )
  }
}

export default MyPlaylistContainer

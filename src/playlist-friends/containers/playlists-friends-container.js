import React, { Component } from 'react'
import PlaylistsFriendsLayout from '../components/playlists-friends-layout'
import Title from '../../myplaylist/components/title'
import PlaylistsFriends from '../components/playlists-friends'

class PlaylistFriendsContainer extends Component {
  render () {
    return (
      <PlaylistsFriendsLayout>
        <Title title = "Playlist de Amigos"/>
        <PlaylistsFriends data = { this.props.friends } />
      </PlaylistsFriendsLayout>
    )
  }
}

export default PlaylistFriendsContainer

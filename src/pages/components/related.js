import React from 'react'
import MyPlaylistContainer from '../../myplaylist/containers/my-playlist'
import PlaylistFriendsContainer from '../../playlist-friends/containers/playlists-friends-container'
import MenuContainer from '../../related-menu/containers/menu-container'

function Related (props) {
  return (
    <div className = "Related">
      <div className = "content-logo">
        <a
          className = "link-logo"
          href="#"
        >
          <img
            src = "./images/logo.png"
            className = "logo"
            alt = "PlatziVideo"
          />
        </a>
      </div>
      <div className = "content-related">
        <MyPlaylistContainer
          myplaylists = { props.myplaylists }
          handleOpenModal = { props.handleOpenModal }
        />
        <PlaylistFriendsContainer friends = { props.friends } />
        <MenuContainer />
      </div>
    </div>
  )
}

export default Related

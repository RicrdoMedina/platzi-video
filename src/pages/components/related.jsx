import React from 'react'
import './related.css'
import MyPlaylistContainer from '../../myplaylist/containers/my-playlist'
import PlaylistFriendsContainer from '../../playlist-friends/containers/playlists-friends-container'
import MenuContainer from '../../related-menu/containers/menu-container'
import Footer from '../../footer/footer'

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
      <MyPlaylistContainer myplaylists = { props.myplaylists }/>
      <PlaylistFriendsContainer friends = { props.friends } />
      <MenuContainer />
      <Footer />
    </div>
  )
}

export default Related

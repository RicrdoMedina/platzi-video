import React from 'react'
import './my-playlist.css'
import PlaylistItem from './playlist-item'

const Playlist = (props) => {
  return (
    <ol className = "RelatedPlaylist">
      {
        props.myplaylists.map( (playlist) => {
          return <PlaylistItem { ...playlist } key = { playlist.id }/>
        })
      }
    </ol>
  )
}

export default Playlist

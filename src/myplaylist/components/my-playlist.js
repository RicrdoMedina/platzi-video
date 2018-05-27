import React from 'react'
import PlaylistItem from './playlist-item'

const Playlist = (props) => {
  const { myplaylists, handleOpenModal } = props
  return (
    <ol className = "RelatedPlaylist">
      {
        myplaylists.map( (playlist) => {
          return <PlaylistItem
                    { ...playlist }
                    key = { playlist.id }
                    openModal = { handleOpenModal }
                  />
        })
      }
    </ol>
  )
}

export default Playlist

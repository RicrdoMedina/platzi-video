import React from 'react'
import PlaylistItemContainer from '../containers/playlist-item-container'

const Playlist = (props) => {
  const { myplaylists, handleOpenModal } = props
  return (
    <ol className = "RelatedPlaylist">
      {
        myplaylists.map( (playlistId) => {
          return <PlaylistItemContainer
                    id = { playlistId }
                    key = { playlistId }
                    openModal = { handleOpenModal }
                  />
        })
      }
    </ol>
  )
}

export default Playlist

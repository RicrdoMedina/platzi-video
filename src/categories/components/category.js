import React from 'react'
import Playlist from '../../playlist/components/playlist'

function Category (props) {
  const { title, description, playlist } = props
  return (
    <div className="row-container-category">
      <h3 className="title-category">{ title }</h3>
      <div className="wrapper-subcategory">
        <h4 className="title-subcategory"> { description } </h4>
        <Playlist
          handleOpenModal = { props.handleOpenModal }
          playlists = { playlist }
        />
      </div>
    </div>
  )
}

export default Category

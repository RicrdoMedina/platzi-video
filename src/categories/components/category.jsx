import React from 'react'
import Playlist from '../../playlist/components/playlist.jsx'
import './category.css'

function Category (props) {
  const { id, title, description, playlist } = props
  const classNameCategory = `row row-category-${id}`
  return (
    <div className={ classNameCategory }>
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
    </div>
  )
}

export default Category

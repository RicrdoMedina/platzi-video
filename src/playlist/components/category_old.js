import React, { Component } from 'react'
import Playlist from './playlist'
import './category.css'

class Category extends Component {
  render() {
    const { categories } = this.props.data
    return (
      <div className="content-media-main">
        {
          categories.map( (category, index) => {
            return 	(
              <Playlist
                index       = { index }
                titulo      = { category.title }
                descripcion = { category.description }
                playlists   = { category.playlist } 
                key         = { category.id }
              />
            )
          })
        }
      </div>
    )
  }
}

export default Category

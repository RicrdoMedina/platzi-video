import React, { Component } from 'react'
import Media from './media'
import './playlist.css'

function Playlist (props) {
  console.log(props)
  const { index, titulo, descripcion, playlists } = props
  const classNameCategory = `row row-category-${index}`
  return (
    <div className={ classNameCategory }>
      <div className="row-container-category">
        <h3 className="title-category">{ titulo }</h3>
        <div className="wrapper-subcategory">
          <h4 className="title-subcategory"> { descripcion } </h4>
          <div className="Playlist">
            {
              playlists.map( (playlist) => {
                return <Media { ...playlist } key={ playlist.id }/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// class Playlist extends Component {
//   render() {
//     console.log(this.props)
//     const { index, titulo, descripcion, playlists } = this.props
//     const classNameCategory = `row row-category-${index}`
//     return (
//       <div className={ classNameCategory }>
//         <div className="row-container-category">
//           <h3 className="title-category">{ titulo }</h3>
//           <div className="wrapper-subcategory">
//             <h4 className="title-subcategory"> { descripcion } </h4>
//             <div className="Playlist">
//               {
//                 playlists.map( (playlist) => {
//                   return <Media { ...playlist } key={ playlist.id }/>
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default Playlist

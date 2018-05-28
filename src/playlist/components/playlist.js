import React from 'react'
// import Media from './media'
import MediaContainer from '../containers/media-container'

function Playlist (props) {
  const { playlists, handleOpenModal } = props
  return (
    <div className = "Playlist">
      {
        playlists.map( (mediaId) => {
          return <MediaContainer openModal = { handleOpenModal } id = { mediaId } key = { mediaId }/>
        })
      }
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

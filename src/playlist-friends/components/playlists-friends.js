import React from 'react'
import PlaylistsFriendItem from './playlist-friend-item'

const PlaylistsFriends = (props) => {
  return (
    <ul className = "RelatedPlaylist Friends u-ul-list-style">
      {
        props.data.map( (friend) => {
          return <PlaylistsFriendItem { ...friend } key = { friend.id }/>
        })
      }
    </ul>
  )
}

export default PlaylistsFriends

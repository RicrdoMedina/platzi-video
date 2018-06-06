import schema from '../schemas'
import schemaMyPlaylists from '../schemas/schema-myplaylists'
import myPlaylistsApi from '../myplaylists.json'
import playlistFriendsApi from '../playlists-friends.json'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../actions-types'

// console.log(myPlaylistsApi)

const myPlaylists = myPlaylistsApi.myplaylists.map((item) => {
  //console.log(item)
  return item
})

const playlistFriends = playlistFriendsApi.data.map((item) => {
  //console.log(item)
  return item
})

//console.log(schemaMyPlaylists)

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
  myPlaylists: schemaMyPlaylists,
  playlistFriends,
})

function data (state = initialState, action) {
  switch ( action.type ) {
    case SEARCH_ENTITIES : {
      // let results = []
      // if (action.payload.query) {
      //   state.data.categories.map( category => {
      //     results = results.concat(category.playlist)
      //   })
  
      //   results = results.filter(item => {
      //     const author = item.author.toLowerCase()
      //     const query = action.payload.query.toLowerCase()
      //     return author.includes(query)
      //   })

      //   if (results.length === 0) {
      //     results = undefined
      //   }
      // }
      // return {
      //   ...state,
      //   search: results
      // }
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data

import schema from '../schemas/index'
import { fromJS } from 'immutable'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
})

function data (state = initialState, action) {
  switch ( action.type ) {
    case 'SEARCH_ENTITIES' : {
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

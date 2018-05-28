import schema from '../schemas/index'

const initialState = {
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
}

function data (state = initialState, action) {
  switch ( action.type ) {
    case 'SEARCH_VIDEO' : {
      let results = []
      if (action.payload.query) {
        state.data.categories.map( category => {
          results = results.concat(category.playlist)
        })
  
        results = results.filter(item => {
          const author = item.author.toLowerCase()
          const query = action.payload.query.toLowerCase()
          return author.includes(query)
        })

        if (results.length === 0) {
          results = undefined
        }
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state
  }
}

export default data

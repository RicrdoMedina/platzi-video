function data (state, action) {
  switch ( action.type ) {
    case 'SEARCH_VIDEO' : {
      // action.payload.query
      // const list = state.data.categories[2].playlist
      // const results = list.filter((item) => {
      //   return item.author.includes(action.payload.query)
      // })
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
      }
      
      // let results = []
      // state.data.categories.forEach(category => {
      //   results = results.concat(
      //     category.playlist.filter(
      //       item => item.author
      //               .includes( action.payload.query )
      //     )
      //   )
      // })
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

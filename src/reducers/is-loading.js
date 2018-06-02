import { Map as map } from 'immutable'
import { IS_LOADING } from '../actions-types'

const initialState = map ({
  active: false
})

function isLoading ( state= initialState, action ) {
  switch (action.type) {
    case IS_LOADING:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default isLoading

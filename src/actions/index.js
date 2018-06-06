import { SEARCH_ENTITIES, SEARCH_ASYNC_ENTITIES, OPEN_MODAL, CLOSE_MODAL, IS_LOADING } from '../actions-types'

export function openModal (media) {
  return {
    type: OPEN_MODAL,
    payload: {
      media
    }
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

export function searchEntities (query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}

export function isLoading (value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncEntities (query) {
  return (dispatch) => {
    if (query) { 
    
      dispatch(isLoading(true))
      // Ejecutar aqui dentro la consulta a la api, trae, super agent, fetch, etc

      setTimeout(() => {
        if (query) dispatch(isLoading(false))
        // funcion que se le pasa como callback a la peticion
        dispatch(searchEntities(query))
      }, 1000)
    } else {
      dispatch(searchEntities(query))
    }
  }
}

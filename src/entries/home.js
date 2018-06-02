// Renderizado de la app

import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Home from '../pages/containers/home'
// import data from '../api.json'
import data from '../schemas/index'
import dataPlaylists from '../myplaylists.json'
import dataFriends from '../playlists-friends.json'
import reducer from '../reducers/index'
import '../css/styles.css'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = {
//   data: {
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaId: null
//   }
// }

// ----- versión pre-ES6
// function logger({ dispatch, getState }){
// 	return ( next ) => {
//  		return ( action ) => {
//  			console.log( 'estado anterior:', getState().toJS() )
//  			console.log( 'enviando acción:', action)
//  			const rslt = next( action )
//  			console.log( 'nuevo estado   :', getState().toJS() )
//  			return rslt
//  		}
// 	}
// }

// --- versión ES6
// const logger = ({ dispatch, getState }) => next => action => {
// 	console.log( 'estado anterior:', getState().toJS() )
// 	console.log( 'enviando acción:', action)
// 	const rslt = next( action )
// 	console.log( 'nuevo estado   :', getState().toJS() )
// 	return rslt
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
   )
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

render(
        <Provider store = { store }>
          <Home playlists = { dataPlaylists.myplaylists } friends = { dataFriends.data } />
        </Provider>, homeContainer
      )

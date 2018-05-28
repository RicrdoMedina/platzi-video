// Renderizado de la app

import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Home from '../pages/containers/home'
// import data from '../api.json'
import data from '../schemas/index'
import dataPlaylists from '../myplaylists.json'
import dataFriends from '../playlists-friends.json'
import reducer from '../reducers/data'
import '../css/styles.css'

console.log(data)

const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

render(
        <Provider store = { store }>
          <Home playlists = { dataPlaylists.myplaylists } friends = { dataFriends.data } />
        </Provider>, homeContainer
      )

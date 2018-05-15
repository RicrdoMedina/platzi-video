// Renderizado de la app

import { render } from 'react-dom'
import React from 'react'
import Home from '../pages/containers/home'
// import Category from '../playlist/components/category'
import data from '../api.json'

const app = document.getElementById('app')

// const holaMundo = <h1>Hola Mu</h1>;

render(<Home data = { data }/>, app)

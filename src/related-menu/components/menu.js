import React from 'react'
import './menu.css'

const Menu = () => (
  <ul className = "Menu u-ul-list-style">
    <li className = "item ">
      <span className = "icon icon--small">
        <i className = "fas fa-cog"></i>
      </span>
      Configuracion
    </li>
    <li className = "item">
      <span className = "icon icon--small">
        <i className = "fas fa-question"></i>
      </span>
      Ayuda
    </li>
  </ul>
)

export default Menu

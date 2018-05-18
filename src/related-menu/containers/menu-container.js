import React, { Component } from 'react'
import MenuLayout from '../components/menu-layout'
import Menu from '../components/menu'

class MenuContainer extends Component {
  render () {
    return (
      <MenuLayout>
        <Menu />
      </MenuLayout>
    )
  }
}

export default MenuContainer

import React from 'react'
import './account-user.css'

const AccountUser = (props) => (
  <div className = "Account">
    <img src = "./images/avatar.jpg" className="avatar avatar--size-small" alt="my avatar"/>
    <div className = { props.open ? 'dropdown open' :  'dropdown' } onClick = { props.handleToggleDropdownAccount }>
      <button className = "dropdown-toggle" type="button" id="dropdownMenuButton">
        Ricardo Medina
      </button>
      <div className = "dropdown-menu">
        <a className = "dropdown-item" href="#">Mi cuenta</a>
        <a className = "dropdown-item" href="#">Logout</a>
      </div>
    </div>
  </div>
)

export default AccountUser

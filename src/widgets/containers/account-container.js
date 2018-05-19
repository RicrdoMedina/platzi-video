import React, { Component } from 'react'
import AccountUser from '../components/account-user'

class AccountContainer extends Component {
  state = {
    open: false
  }
  handleToggleDropdownAccountOpen = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    return (
      <AccountUser handleToggleDropdownAccount = { this.handleToggleDropdownAccountOpen } open = { this.state.open }/>
    )
  }
}

export default AccountContainer

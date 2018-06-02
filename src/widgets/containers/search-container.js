import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
// import { bindActionCreators } from 'redux'
import { searchEntities, searchAsyncEntities } from'../../actions/index';

const mapDispatchToProps = {
	searchAsyncEntities
}

class SearchContainer extends Component {
  state = {
    value: ''
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.input.value !== '') {
      //this.props.handleShowSpinnerSearch()
    }
    this.props.searchAsyncEntities(this.input.value)
    //this.props.searchEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render () {
    return (
      <Search
        setRef = { this.setInputRef }
        handleSubmit = { this.handleSubmit }
        handleChange= { this.handleInputChange }
        value = { this.state.value }
      />
    )
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(null, mapDispatchToProps)(SearchContainer)

import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
// import { bindActionCreators } from 'redux'
import { openModal } from'../../actions/index';

const mapDispatchToProps = {
	openModal
}

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.openModal(id)
  }
  render () {
    return <Media
            openModal = { this.openModal }
            title  = { this.props.data.get('title') }
            author = { this.props.data.get('author') }
            type   = { this.props.data.get('type') }
            cover  = { this.props.data.get('cover') }
            src    = { this.props.data.get('src') }
            id     = { this.props.data.get('id') }
            key    = { this.props.data.get('id') }
          />
  }
}

function mapStateToProps(state, props) {
  // console.log(props.id, 'media container')
  return {
    data: state.getIn(['data', 'entities', 'media', props.id])
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)

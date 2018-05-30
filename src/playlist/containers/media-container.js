import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'

class MediaContainer extends Component {
  openModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id
      }
    })
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

export default connect(mapStateToProps)(MediaContainer)

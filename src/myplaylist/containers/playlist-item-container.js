import React, { Component } from 'react'
import PlaylistItem from '../components/playlist-item'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
// import { bindActionCreators } from 'redux'
import { openModal } from'../../actions';

const mapDispatchToProps = {
	openModal
}

class PlaylistItemContainer extends Component {
  openModal = (media) => {
    this.props.openModal(media)
  }
  render () {
    //console.log(this.props, 'props')
    return <PlaylistItem
            openModal = { this.openModal }
            playlist = { this.props.playlist }
            key = { this.props.id }
          />
  }
}

function mapStateToProps(state, props) {
  // console.log(props.id, 'media container')
  // console.log(state.getIn(['data','myPlaylists', 'entities', 'myplaylists', props.id]),'prueba')
  return {
    playlist: state.getIn(['data','myPlaylists', 'entities', 'myplaylists', props.id])
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItemContainer)

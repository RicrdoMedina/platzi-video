import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { List as list } from 'immutable'
// import * as actions from '../../actions/index'
// import { bindActionCreators } from 'redux'
import { openModal, closeModal } from'../../actions';

const mapDispatchToProps = {
  openModal,
  closeModal
}

class Home extends Component {
  state = {
    // modalVisible: false,
    spinnerVisible: false
  }
  handleOpenModal = (media) => {
    // this.setState({
    //   modalVisible: true,
    //   media
    // })
    //this.props.dispatch(openModal(id))
    //this.props.openModal(id)
    this.props.openModal(media)
  }
  handleCloseModal = (event) => {
    // this.setState({
    //   modalVisible: false
    // })
    // this.props.dispatch(closeModal())
    this.props.closeModal()
  }
  handleShowSpinnerSearch = () => {
    this.setState({
      spinnerVisible: !this.state.spinnerVisible
    })
  }
  render () {
    return (
      <HandleError>
        <HomeLayout>
          <Related
            myplaylists = { this.props.playlists }
            friends = { this.props.friends }
            handleOpenModal = { this.handleOpenModal }
          />
          <Categories
            categories={ this.props.categories }
            handleOpenModal = { this.handleOpenModal }
            search = { this.props.search }
            // spinner = { this.state.spinnerVisible }
            // handleShowSpinnerSearch = { this.handleShowSpinnerSearch }
            statusSearchResults = { this.props.statusSearchResults }
            isLoading = { this.props.isLoading }
          />
          {
            this.props.modal.get('visibility') && 
            <ModalContainer>
              <div className="modal-overlay">
                <Modal handleClick = { this.handleCloseModal }>
                  <VideoPlayer
                    autoplay = { true }
                    // id = { this.props.modal.get('mediaId')}
                    // src = { this.state.media.src }
                    //  title = { this.state.media.title }
                    id = { this.props.modal.id}
                    src = { this.props.modal.src }
                    title = { this.props.modal.title }
                  />
                </Modal>
              </div>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

// Home.propTypes = {
//   categories: PropTypes.array.isRequired,
//   friends: PropTypes.array.isRequired,
//   playlists: PropTypes.array.isRequired,
//   search: PropTypes.array.isRequired
// }

function mapStateToProps (state, props) {
  const categories = state.get('data').get('categories').map((categoryId) => {
    return state.getIn(['data', 'entities', 'categories', categoryId])
  })

  const playlists = state.getIn(['data','myPlaylists', 'result', 'myplaylists'])

  let searchResults = list()
  let statusSearchResults = null
  const search = state.get('data').get('search')
  if (typeof(search) === 'string' && search !== '') {
    const mediaList = state.get('data').get('entities').get('media')

		searchResults = mediaList.filter(function (item) {
			if (item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase())) {
				return true
			}
    })
    searchResults.size === 0 ? statusSearchResults = false : statusSearchResults = true
  }

  return {
    categories,
    search: searchResults,
    playlists,
    statusSearchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home)

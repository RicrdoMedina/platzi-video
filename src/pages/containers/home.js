import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    modalVisible: false,
    spinnerVisible: false
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
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
            spinner = { this.state.spinnerVisible }
            handleShowSpinnerSearch = { this.handleShowSpinnerSearch }
          />
          {
            this.state.modalVisible && 
            <ModalContainer>
              <Modal handleClick = { this.handleCloseModal }>
                <VideoPlayer
                  autoplay = { true }
                  src= { this.state.media.src }
                  title = { this.state.media.title }
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    categories: state.data.categories,
    search: state.search
  }
}

export default connect(mapStateToProps) (Home)

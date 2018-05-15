import React, { Component } from 'react'
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories.jsx'
import Related from '../components/related.jsx'
import ModalContainer from '../../widgets/containers/modal-container.jsx'
import Modal from '../../widgets/components/modal.jsx'

class Home extends Component {
  state = {
    modalVisible: false
  }
  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }
  render () {
    return (
      <HomeLayout>
        <Related />
        <Categories 
          categories={ this.props.data.categories }
          handleOpenModal = { this.handleOpenModal }
        />
        {
          this.state.modalVisible && 
          <ModalContainer>
            <Modal handleClick = { this.handleCloseModal }>
              <h1>Esto es un portal</h1>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home

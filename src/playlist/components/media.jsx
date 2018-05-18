import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
  state = { ...this.props }
  // constructor (props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  //   this.state = {
  //     author: props.author
  //   }
  // }
  handleClick = (event) => {
    // console.log(this.props.title)
    // this.setState({
    //   author: 'Ricardo Celis'
    // })
    this.props.openModal(this.props)
  }

  render() {
    //const { title, author, image } = this.props
    return (
      <div className="Media" onClick={ this.handleClick }>
        <div className="Media-cover">
          <img
            src={ this.props.cover }
            alt=""
            className="Media-image"
          />
        </div>
        <div className="Media-description">
          <h3 className="Media-title">{ this.props.title }</h3> 
          <p className="Media-autor">{ this.props.author }</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media

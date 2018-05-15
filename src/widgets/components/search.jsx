import React from 'react'
import './search.css'

const Search = (props) => (
  <form className="Search" onSubmit = { props.handleSubmit }>
    <input
      ref={ props.setRef }
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito"
      defaultValue = ""
      name="search"
      onChange={ props.handleChange }
      value={ props.value }
    />
    <span className="icon">
      <i className="fas fa-search"></i>
    </span>
  </form>
)

export default Search

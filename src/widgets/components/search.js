import React from 'react'

const Search = (props) => (
  <form className="Search" onSubmit = { props.handleSubmit } autocomplete="off">
    <input
      ref={ props.setRef }
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito"
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

import React from 'react'
import Category from './category'
import TopFixedCategories from '../../widgets/components/top-fixed-categories'
import Search from '../../widgets/containers/search-container'
import Account from '../../widgets/containers/account-container'
import Media from '../../playlist/components/media'

function Categories (props) {
  console.log(props.categories, 'categories')
  console.log(props.search, 'search')
  let classNameResult = props.search.length > 0 ? 'title-result-search show' : 'title-result-search'
  return (
    <div className="Categories">
      <div className="content-categories">
        <TopFixedCategories>
          <Search />
          <Account />
        </TopFixedCategories>
        <h3 className = { classNameResult }> Resultados: { props.search.length }</h3>
        {
          props.search.map((item) => {
            return <Media openModal = { props.handleOpenModal } {...item} key={ item.id } />
          })
        }
        {
          props.categories.map((item) => {
            return (
              <Category
                key={ item.id }
                { ...item }
                handleOpenModal = { props.handleOpenModal }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories

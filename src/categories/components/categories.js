import React from 'react'
import Category from './category'
import TopFixedCategories from '../../widgets/components/top-fixed-categories'
import Search from '../../widgets/containers/search-container'
import Account from '../../widgets/containers/account-container'
import Media from '../../playlist/components/media'

function Categories (props) {
  if (props.search.length > 0) {
    const matchResults = `Coincidencias: ${props.search.length}`
    const arrSearch = [{ id: '0', description: matchResults, title: 'Resultado de busqueda', playlist: props.search }]

    return (
      <div className="Categories">
        <div className="content-categories">
          <TopFixedCategories>
            <Search />
            <Account />
          </TopFixedCategories>
          {
            arrSearch.map((item) => {
              return (
                <Category
                  key={ item.id }
                  { ...item }
                  handleOpenModal = { props.handleOpenModal }
                />
              )
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
  } else {
    return (
      <div className="Categories">
        <div className="content-categories">
          <TopFixedCategories>
            <Search />
            <Account />
          </TopFixedCategories>
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
}

export default Categories

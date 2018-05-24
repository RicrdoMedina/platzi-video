import React from 'react'
import Category from './category'
import TopFixedCategories from '../../widgets/components/top-fixed-categories'
import Search from '../../widgets/containers/search-container'
import Account from '../../widgets/containers/account-container'
import Alert from '../../widgets/components/alert'
import Loader from '../../widgets/components/Loader'
import Media from '../../playlist/components/media'

const Categories = (props) => {
  const { spinner, search, categories, handleShowSpinnerSearch, handleOpenModal } = props

  if (spinner) {
    setTimeout(() => {
      handleShowSpinnerSearch()
    }, 4000)
  }

  const matchResults = typeof(search) !== 'undefined' && search.length > 0 ? `Coincidencias: ${search.length}` : undefined

  const arrSearch = typeof(search) !== 'undefined' && search.length > 0 ? [{ id: '0', description: matchResults, title: 'Resultado de busqueda', playlist: search }] : []

  return (
    <div className="Categories">
      <div id="contentCategories" className={ spinner ? 'content-categories searching' : 'content-categories' } >
        <TopFixedCategories>
          <Search
            handleShowSpinnerSearch = { handleShowSpinnerSearch }
          />
          <Account />
        </TopFixedCategories>
        <Alert
          classDisplay = { typeof(search) === 'undefined' && spinner === false ? 'show' : '' }
          type = "info"
          message = "No se encontraron resultados"
        />
        <Loader/>
        {
          arrSearch.map((item) => {
            return (
              <Category
                key={ item.id }
                { ...item }
                handleOpenModal = { handleOpenModal }
              />
            )
          })
        }
        {
          categories.map((item) => {
            return (
              <Category
                key={ item.id }
                { ...item }
                handleOpenModal = { handleOpenModal }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Categories

import React from 'react'
import Category from './category'
import TopFixedCategories from '../../widgets/components/top-fixed-categories'
import Search from '../../widgets/containers/search-container'
import Account from '../../widgets/containers/account-container'
import Alert from '../../widgets/components/alert'
import Loading from '../../utils/components/spinner'
import Media from '../../playlist/components/media'

const Categories = (props) => {
  const { spinner, isLoading, categories, search, statusSearchResults, handleShowSpinnerSearch, handleOpenModal } = props
  // const categories = props.categories.toJS()
  // const search = props.search.toJS()
  // console.log(categories)

  // if (spinner) {
  //   setTimeout(() => {
  //     handleShowSpinnerSearch()
  //   }, 4000)
  // }

  let listPlaylistIds = new Set()

  if (statusSearchResults){
    search.map((item) => {
      listPlaylistIds.add(item.get('id'))
    })
  }

  listPlaylistIds = [...listPlaylistIds]

  const matchResults = statusSearchResults ? `Coincidencias: ${search.size}` : undefined

  const arrSearch = statusSearchResults ? [{ id: '0', description: matchResults, title: 'Resultado de busqueda', playlist: listPlaylistIds }] : []

  return (
    <div className="Categories">
      <div id="contentCategories" className={ isLoading ? 'content-categories searching' : 'content-categories' } >
        <TopFixedCategories>
          <Search
            // handleShowSpinnerSearch = { handleShowSpinnerSearch }
          />
          <Account />
        </TopFixedCategories>
        <Alert
          classDisplay = { statusSearchResults !== null && !statusSearchResults  && isLoading === false ? 'show' : '' }
          type = "info"
          message = "No se encontraron resultados"
        />
        <Loading active = { isLoading } />
        {
          arrSearch.map((item) => {
            return (
              <Category
                key = { item.id }
                title = { item.title }
                description = { item.description }
                playlist = { item.playlist }
                handleOpenModal = { handleOpenModal }
              />
            )
          })
        }
        {
          categories.map((item) => {
            return (
              <Category
                key = { item.get('id')}
                title = { item.get('title') }
                description = { item.get('description') }
                playlist = { item.get('playlist') }
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

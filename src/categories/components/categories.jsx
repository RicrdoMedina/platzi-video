import React from 'react'
import Category from './category.jsx'
import TopFixedCategories from '../../widgets/components/top-fixed-categories.jsx'
import Search from '../../widgets/containers/search-container.jsx'
import Account from '../../widgets/containers/account-container'

function Categories (props) {
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

export default Categories

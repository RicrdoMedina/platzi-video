import React from 'react'
import Category from './category.jsx'
import TopFixedCategories from '../../widgets/components/top-fixed-categories.jsx'
import Search from '../../widgets/containers/search-container.jsx'

function Categories (props) {
  console.log('category')
  console.log(props)
  return (
    <div className="Categories">
      <div className="content-categories">
        <TopFixedCategories>
          <Search />
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

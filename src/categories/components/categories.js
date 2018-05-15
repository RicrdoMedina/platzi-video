import React from 'react'
import Category from './category'

function Categories (props) {
  console.log('category')
  console.log(props)
  return (
    <div className="Categories">
      <div className="content-categories">
        {
          props.categories.map((item) => {
            return <Category key={ item.id } { ...item }/>
          })
        }
      </div>
    </div>
  )
}

export default Categories

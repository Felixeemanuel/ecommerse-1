import React from 'react'
import './homeCategoryFilter.css'
import { TbCategoryPlus } from "react-icons/tb";


const HomeCategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {


  return (
    <aside className='categoryWrapper'>
        <div className='categoryTitleWrapper'>
            <TbCategoryPlus className='categoryIcon'/>
            <h2 className='categoryTitle'>Categories</h2>
        </div>
        <ul>
            {categories.map(category => (
                <li 
                key={category} 
                className={category === selectedCategory ? 'active' : ''} 
                onClick={() => onSelectCategory(category)}>
                    {category}
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default HomeCategoryFilter
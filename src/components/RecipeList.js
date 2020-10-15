import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({recipes}) {
  const { handleRecipeAdd } = useContext(RecipeContext)
  return (
    <div className="recipe-list">
      <div>
        {
          recipes.map(r => {
            return <Recipe key={r.id} {...r} />
          })
        }
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn-primary" onClick={handleRecipeAdd}>Add Recipe</button>
      </div>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

const RecipeItem = ({recipe}) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  )
}

export default RecipeItem

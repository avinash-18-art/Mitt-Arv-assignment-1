import React from 'react'

const RecipeDetails = ({recipe}) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  )
}

export default RecipeDetails

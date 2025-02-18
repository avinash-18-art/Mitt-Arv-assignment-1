import React from 'react'

const RecipeList = ({recipes}) => {
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList

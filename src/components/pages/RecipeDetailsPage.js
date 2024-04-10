import React from 'react'
import {useParams} from 'react-router-dom'
import RecipeDetails from '../components/Recipe/RecipeDetails'

const RecipeDetailsPage = () => {
  const {id} = useParams()

  const recipe = {
    id: parseInt(id),
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta dish',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese'],
    instructions: 'Cook spaghetti, fry pancetta, mix with eggs and cheese',
  }

  return <RecipeDetails recipe={recipe} />
}

export default RecipeDetailsPage

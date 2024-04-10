import React, {useState, useEffect} from 'react'
import RecipeList from '../components/Recipe/RecipeList'

const Home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchedRecipes = [
      {
        id: 1,
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese'],
        instructions: 'Cook spaghetti, fry pancetta, mix with eggs and cheese',
      },
      {
        id: 2,
        title: 'Chicken Tikka Masala',
        description: 'Popular Indian curry dish',
        ingredients: ['Chicken', 'Yogurt', 'Tomato Sauce', 'Spices'],
        instructions: 'Marinate chicken, grill, simmer in tomato sauce',
      },
    ]
    setRecipes(fetchedRecipes)
  }, [])

  return <RecipeList recipes={recipes} />
}

export default Home

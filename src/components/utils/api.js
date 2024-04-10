// Example base URL of the backend API
const BASE_URL = 'https://example.com/api'

// Function to fetch recipes from the backend API
export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipes`)
    if (!response.ok) {
      throw new Error('Failed to fetch recipes')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
}

// Function to fetch a single recipe by ID from the backend API
export const fetchRecipeById = async id => {
  try {
    const response = await fetch(`${BASE_URL}/recipes/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch recipe')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching recipe:', error)
    return null
  }
}

// Function to search recipes by a keyword
export const searchRecipes = async keyword => {
  try {
    const response = await fetch(`${BASE_URL}/recipes?search=${keyword}`)
    if (!response.ok) {
      throw new Error('Failed to search recipes')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching recipes:', error)
    return []
  }
}

// Function to filter recipes based on a filter criterion
export const filterRecipes = async filterValue => {
  try {
    const response = await fetch(`${BASE_URL}/recipes?filter=${filterValue}`)
    if (!response.ok) {
      throw new Error('Failed to filter recipes')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error filtering recipes:', error)
    return []
  }
}

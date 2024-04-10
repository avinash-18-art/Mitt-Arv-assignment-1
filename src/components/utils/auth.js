export const authenticateUser = async (email, password) => {
  try {
    // Make a request to the backend API to authenticate user
    const response = await fetch('https://example.com/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })

    // If authentication successful, return user data
    if (response.ok) {
      const userData = await response.json()
      return userData
    } else {
      // If authentication failed, throw an error
      throw new Error('Authentication failed')
    }
  } catch (error) {
    console.error('Authentication error:', error)
    throw error
  }
}

// Function to logout the user
export const logoutUser = async () => {
  try {
    // Make a request to the backend API to logout user
    const response = await fetch('https://example.com/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // If logout successful, return true
    if (response.ok) {
      return true
    } else {
      // If logout failed, throw an error
      throw new Error('Logout failed')
    }
  } catch (error) {
    console.error('Logout error:', error)
    throw error
  }
}

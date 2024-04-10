import React from 'react'

const Logout = () => {
  const handleLogout = () => {
    console.log('Logging out...')
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

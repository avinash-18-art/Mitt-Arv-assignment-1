import React from 'react'

const BookmarkItem = ({bookmark}) => {
  return (
    <li>
      <p>{bookmark.title}</p>
      {/* Add more details or actions related to the bookmark */}
    </li>
  )
}

export default BookmarkItem

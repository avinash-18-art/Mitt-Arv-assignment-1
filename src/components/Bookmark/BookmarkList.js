import React from 'react'
import BookmarkItem from './BookmarkItem'

const BookmarkList = ({bookmarks}) => {
  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks added yet.</p>
      ) : (
        <ul>
          {bookmarks.map(bookmark => (
            <BookmarkItem key={bookmark.id} bookmark={bookmark} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookmarkList

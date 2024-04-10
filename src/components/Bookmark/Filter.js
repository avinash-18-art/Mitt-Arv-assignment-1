import React, {useState} from 'react'

const Filter = ({onFilter}) => {
  const [filterValue, setFilterValue] = useState('')

  const handleFilterChange = e => {
    setFilterValue(e.target.value)

    onFilter(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter recipes"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter

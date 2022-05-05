import React from 'react'

function TagList({ tagsProp }) {
  return (
    <ul>
      {tagsProp.map((tag) => (
        <li>{tag}</li>
      ))}
    </ul>
  )
}

export default TagList

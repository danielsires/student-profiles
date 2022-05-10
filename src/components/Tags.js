import React from 'react'

function Tags({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <button key={tag}>{tag}</button>
      ))}
    </>
  )
}

export default Tags

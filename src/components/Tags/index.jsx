import React from 'react'

const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          <p>{tag}</p>
        </span>
      ))}
    </div>
  )
}

export default Tags

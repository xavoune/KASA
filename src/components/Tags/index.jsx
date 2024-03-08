import React from 'react'
import '../../styles/components/tags.scss'

const Tags = ({ tags }) => {
  return (
    <div className="tagsContainer">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          <p>{tag}</p>
        </span>
      ))}
    </div>
  )
}

export default Tags

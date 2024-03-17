/* React import */
import React from 'react'

/**
 * @summary generate the tags
 *
 * @param {string} tags tags from "logements.json"
 *
 */

function Tags({ tags }) {
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

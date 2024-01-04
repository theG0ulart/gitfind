import React from 'react'
import './styles.css'

function ItemList({title, description, link}) {
  return (
    <div className="item-list" href={link}>
        <a href={link}><strong>{title}</strong></a>
        <p>{description}</p>
        <hr />
    </div>
  )
}

export default ItemList;

import React from 'react'
import css from './SearchItem.module.css'

function SearchItem(props) {
    const { name, title, description, image } = props.post
    return (
        <div className={css.SearchItem}>
            <div>{name} {title}</div>
            <img src={image}/>
            <div>{description}</div>
        </div>
    )
}

export default SearchItem
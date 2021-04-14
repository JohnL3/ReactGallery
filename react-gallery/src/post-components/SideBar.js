import React from 'react'
import css from './SideBar.module.css'

function SideBar() {
    return (
        <div className={css.SideBar}>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My Photos</a>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My Illustrations</a>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My Paintings</a>
        </div>
    )
}

export default SideBar

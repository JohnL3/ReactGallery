import React from 'react'
import css from './SideBar.module.css'

function SideBar() {
    return (
        <div className={css.SideBar}>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My link 1</a>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My link 2</a>
            <a href = "https://www.google.com" rel="noreferrer" target = "_blank" alt = "a link">My link 3</a>
        </div>
    )
}

export default SideBar

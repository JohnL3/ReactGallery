import React from 'react'
import css from './Content.module.css'
import { SearchBar } from './SearchBar'

function Content() {
    return (
        <div className={css.Content}>
            <h1>My Gallery content</h1>
            <SearchBar />
        </div>
    )
}

export default Content

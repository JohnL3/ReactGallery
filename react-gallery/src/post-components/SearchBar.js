import React, { Component } from 'react'
import {posts} from '../loremPicsum.json'
import SearchItem from './SearchItem'
import css from './SearchBar.module.css'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: posts
        }
    }
    handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = posts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        console.log(filteredPosts)
        this.setState({
            posts: filteredPosts
        })
    }
    render() {
        return (
            <div>
                <h1>Post Search 3</h1>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                    />
                </form>
                <div className={css.SearchResults}>
                    {
                        this.state.posts.map(post => {
                            // const {title, description, name, image} = post;
                            return (
                                <SearchItem key={post.title} post={post} />
                                // <div key={title}>
                                //     <td>{title}</td>
                                //     <td>{description}</td>
                                //     <td>{name}</td>
                                //     <td><img alt={name} src={image} /></td>
                                // </div>
                            )
                        })
                    }                    
                </div>
            </div>
        )
    }
}
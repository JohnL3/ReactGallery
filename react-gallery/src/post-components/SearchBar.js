import React, { Component } from 'react'
import { posts } from '../loremPicsum.json'
import PostItem from './PostItem'
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
            <div className = {css.SearchBar}>
                <h4>posts found: {this.state.posts.length}</h4>
                <form>
                    <input
                        onChange={(e) => this.handleChange(e)}
                        type="text"
                        size="30"
                        placeholder="search posts by author's name..."
                    />
                </form>
                <div className={css.SearchResults}>
                    {
                        this.state.posts.map(post => {
                            // const {title, description, name, image} = post;
                            return (
                                <PostItem key={post.title} post={post} />
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
import React, { Component } from 'react'
import PostItem from './PostItem'
import css from './Content.module.css'
import { posts } from '../loremPicsum.json'


export class Content extends Component {
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
        this.setState({
            posts: filteredPosts
        })
    }
    render() {
        return (
            <div className={css.Content}>
                <div className = {css.TitleBar}> 
                    <h1>My Photos</h1>
                    <form>
                        <label for = "searchInput">Search: </label>
                        <input
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            size="20"
                            id = "searchInput"
                            placeholder="By Author"
                        />
                    </form> 
                </div>

                <h4>posts found: {this.state.posts.length}</h4>

                <div className={css.SearchResults}>
                        {
                            this.state.posts.map(post => {
                                return (
                                    <PostItem key={post.title} post={post} />
                                )
                            })
                        }                    
                    </div>
            </div>
        )
    }
}

export default Content

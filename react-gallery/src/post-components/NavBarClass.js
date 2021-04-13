import React, { Component } from 'react'
import css from './NavBarClass.module.css'

export class NavBarClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in"
        }
    }
    handleLogIn = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
        }))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <span>My Gallery</span>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={this.handleLogIn}>
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        )
    }
}

export default NavBarClass

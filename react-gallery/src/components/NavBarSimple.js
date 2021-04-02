import React, { Component } from 'react'
import styles from "./css/navBarSimple.module.css";


export class NavBarSimple extends Component {

    constructor(props) {
    super(props)

    this.state = {
        name: " to our shop",
        signIn: "Sign In",
         
    }
}

    handleClick(){
        this.setState({
            name: this.state.name === "back, Ronan!" ? "Guest" : "back, Ronan!",
            signIn: this.state.signIn === "Sign In" ? "Sign Out" : "Sign In",
        },() => {
            console.log(this.state.name);
            console.log(this.state.signIn);
        });
    }

    render() {
        return (
            <div className={styles.divClass}>
                <div>
                    <h1 className={styles.h1Class}>Artwork Shop</h1>
                    <h3 className = {styles.h2Class}>Welcome {this.state.name}</h3>
                </div>
                
                <button 
                    className={styles.buttonClass}
                    onClick = {() => this.handleClick()}
                    >{this.state.signIn}
                    
                </button>
                
            </div>
        )
    }
}

export default NavBarSimple

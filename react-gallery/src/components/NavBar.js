import React, {useState, useEffect} from 'react'
import styles from "./css/navBar.module.css";


function NavBar(props) {
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
    
    useEffect(() => {
        document.title = login;
    });

    return (
        <div className={styles.divClass}>
            {login ? (
                <div>
                    <h1 className={styles.h1Class}>Artwork Shop</h1>
                    <button 
                        className={styles.buttonClass}
                        onClick = {
                            () => setLogin(false)
                            }>    
                            Log in
                    </button>
                    <button 
                        className={styles.buttonClass}
                        onClick = {
                            () => setLogin(true)
                        }>
                            Sign Up
                    </button>
                </div>
            ):(
                <div>
                    <h1 className={styles.h1Class}>Artwork Shop</h1>
                   <div className = {styles.formDiv}>
                       <form onSubmit = {handleSubmit}>
                            <label htmlFor = "usernameLabel">Username</label>
                            <input 
                                className = {styles.inputClass} 
                                name = "username"
                                type = "text" 
                                id = "usernameLabel" 
                                value = {username}
                                placeholder = "Username"
                                onChange = {(e) => setUsername(e.target.value)}
                                />

                            <label htmlFor = "passwordLabel">Password</label>
                                <input 
                                className = {styles.inputClass} 
                                name = "password"
                                type = "password" 
                                id = "passwordLabel" 
                                value = {password}
                                onChange = {(e) => setPassword(e.target.value)}
                                />
                            <br />
                            <input 
                                type="submit" value="Submit" className = {styles.submitButton}></input>
                        </form>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default NavBar

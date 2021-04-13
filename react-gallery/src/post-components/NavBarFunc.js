import React, {useState} from 'react'
import css from './NavBarFunc.module.css'

function NavBarFunc() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
    }
    return (
        <div className={css.NavBar}>
            <span>My Gallery</span>
            <div>
                { isLoggedIn
                ? <button onClick={handleLogOut}>Log out</button>
                : <>
                    <form id="login-form" onSubmit={(e) => handleLogIn(e)}>
                        <input onChange={e => setUsername(e.target.value)} id="username" type="text" value={username} />
                        <input onChange={e => setPassword(e.target.value)} id="password" type="password" value={password} />
                    </form>
                    <button type="submit" form="login-form">Log in</button>
                </>
                }
                
            </div>
        </div>
    )
}

export default NavBarFunc

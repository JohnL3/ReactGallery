import React from 'react'
import styles from "./css/sideBar.module.css";

function SideBar() {
    return (
        <div className={styles.divClass}>
            <a href = "https://www.google.com" rel="noreferrer" className = {styles.aClass} target = "_blank" alt = "Create Artwork Link"><button className={styles.buttonClass}>Create Artwork</button></a>
            <a href = "https://www.google.com"  rel="noreferrer"className = {styles.aClass} target = "_blank" alt = "Create Artwork Link"><button className={styles.buttonClass}>My Artwork</button></a>
            <a href = "https://www.google.com" rel="noreferrer" className = {styles.aClass} target = "_blank" alt = "Create Artwork Link"><button className={styles.buttonClass}>My Purchases</button></a>
        </div>
    )
}

export default SideBar

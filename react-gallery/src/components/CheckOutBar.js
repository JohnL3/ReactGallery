import React from 'react'
import CheckOutComponent from "./CheckOutComponent.js";
import styles from './css/checkOutBar.module.css';


function CheckOutBar() {
    return (
        <div className = {styles.divClass}>
            <CheckOutComponent />
        </div>
    )
}

export default CheckOutBar

import React from 'react'
import styles from "./css/mainWindow.module.css";
import CheckOutComponent from './CheckOutComponent';


function MainWindowClass() {

        const artworks = [
        {
            name:"Wolverine",
            artist: "Humberto Ramos",
            price: 250,
            link: "http://geekandsundry.com/wp-content/uploads/2015/07/humberto-ramos-2-e1436995015508.jpg",
        },

        {
            name: "Spiderman",
            artist: "Humberto Ramos",
            price: 350,
            link: "https://lospaziobianco.it/wp-content/uploads/2019/12/tumblr_n3ehkevVDw1rcp7bmo1_1280-e1479636174733.jpg",
        },

        {
            name:"Rainy Spidey",
            artist: "Humberto Ramos",
            price: 450,
            link: "https://external-preview.redd.it/jWYePD8hxGB2qBEkHQ2AyNDGSMVmb4o_5BX-Z2AChbM.jpg?auto=webp&s=d989f08723abb8bc622da12535c1c3f757894bbb",
        },
    ]

    

    return (
        <div className = {styles.divClass}>
            <div className = {styles.divHeader}>
                <h1 className = {styles.h1Class}>Gallery</h1>
            </div>
           <div className = {styles.bodyDiv}>
           {
               artworks.map(artwork =>{
                return(
                    <div className = {styles.artworkDivClass} key = {artwork.name}>
                        <div className = {styles.imgContainer}>
                            <img src = {artwork.link} alt = {artwork.name}/>
                        </div>
                        <h4>{artwork.name}</h4>
                        <h5>Artist: {artwork.artist}</h5>
                        <h3>Price: ${artwork.price}</h3>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}

export default MainWindowClass
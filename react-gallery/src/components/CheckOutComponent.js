import React from 'react'

function CheckOutComponent (props){
    
    const addToCheckout = () =>{
        console.log(props.artworks)
    }



    return(
        <div>
            {addToCheckout}
        </div>
    )
}

export default CheckOutComponent
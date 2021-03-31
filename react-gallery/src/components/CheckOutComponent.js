import React from 'react'

function CheckOutComponent (props){
    console.log('coc props', props.cartItems)
    return(
        <div>
            checkout component
            {
                props.cartItems?.map(item => <p>{item.name}</p>)
            }
        </div>
    )
}

export default CheckOutComponent
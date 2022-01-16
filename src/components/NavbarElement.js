import React from 'react'
import './navbar.css' 

function NavbarElement(props) {

    return (
        <>
            <a href={props.website} className='navbarClick'>{props.name}</a>
        </>
    )
}

export default NavbarElement

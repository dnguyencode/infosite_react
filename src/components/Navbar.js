import React from 'react'

// standard javascript export
function Navbar() {
    return (
        <nav className='nav'>
            <img src={require("../img/react-icon-small.png")} className='nav--icon' alt='' />
            <h2 className='nav--logo_text'>ReactFacts</h2>
            <h3 className='nav--title'>React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar
import React from 'react';
import Logo from "../assets/photo-camera.png"
import ".././App.css"


const Header = () => {
    return (
        <header className=''>
                <div className='relative pb-10 bg-gray-800 overflow-hidden'>
                    <img src={Logo} alt="el logo" width={20} height={20} />
                     Pics Gallery
                </div>
        </header>
    )
};

export default Header

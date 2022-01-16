import React from 'react';
import {AppBar , Toolbar } from "@material-ui/core";
import Logo from "../assets/photo-camera.png"
import ".././App.css"


const Header = () => {
    return (
        <header className='Header__container'>
            <AppBar >
                <Toolbar className='Header'>
                    <img src={Logo} alt="el logo" width={20} height={20} />
                     Pics Gallery
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Header

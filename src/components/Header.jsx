import React from 'react';
import Logo from "../assets/photo-camera.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import ".././App.css"


const Header = () => {
    return (
        <header className=''>
                  <div className='relative py-5 bg-gray-800 overflow-hidden'>
                  <a href='/'>
                      <div className='text-center text-white text-3xl'>
                        <FontAwesomeIcon icon={faCamera} />
                         <h1 className='font-extrabold text-xl'> Pics Gallery </h1>
                      </div>
                    </a>
                  </div>
        </header>
    )
};

export default Header

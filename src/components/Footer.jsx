import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className='relative py-5 bg-gray-700 text-white text-center' >
              Development whit
              <FontAwesomeIcon  icon={faHeart} className='mx-2 text-red-900' />
              by <a href='https://github.com/Isisag' className='font-bold '>Isis Aguilar</a> 
            <a href='https://github.com/Isisag/Pics-Gallery-ReactJS' className='italic mx-1'> |  Pics Gallery Repo </a>
        </footer>
    )
}

export default Footer

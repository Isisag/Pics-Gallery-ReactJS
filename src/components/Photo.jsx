import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"
import DetailsButton from './DetailsButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'



const Photo = ({ photographer, photographer_url, src, url, alt, photoId }) => (

    <div className="flex align-middle flex-row ">
        <div className="m-5 bg-gray-100 w-30 p-4 text-center shadow-md rounded-2xl hover:scale-105 ease-out transition duration-200">
            <img src={src} alt={alt} className='w-30'/>
            <br />
            {/* <h3 className='text-center max-w-xs mb-5'> {alt} </h3> */}
            <div className='mb-1 text-gray-800'><b> Photographer </b><h2 className='uppercase'>{photographer}</h2></div>
            <a href={photographer_url} className='h6 text-blue-500'> <i> See more to {photographer} work </i> </a> 
            <br /><br /> 
            <a href={url} className='uppercase font-semibold bg-blue-200 px-5 rounded-2xl' >
            <FontAwesomeIcon icon={faImage} className='mx-1' />
                hd photo </a>
            <br /><br />
            <DetailsButton type="details" to={`photo/${photoId}`} />
        </div>
    </div>

);

export default Photo

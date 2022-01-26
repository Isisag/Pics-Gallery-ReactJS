import React, {useState, useContext} from 'react'
import DetailsButton from './DetailsButton'
// import { PhotosContext } from '../contexts/PhotosContext';


const Details = ({to, type}) => {

    // const { photo } = useContext(PhotosContext);
    

    return (
        <>
            <p> im a details to {to}  </p>
            <img  alt="" src="" />
            <DetailsButton type="back" to="/" />
        </>
    )
}

export default Details

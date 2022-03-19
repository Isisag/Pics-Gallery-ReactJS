import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"
import Details from "./Details"
import DetailsButton from './DetailsButton';

const Photo = ({ photographer, photographer_url, src, url, alt, photoId }) => (

    <div className="bg-teal-700">
        <div className="content-center mb-20">
            <h3> {alt} </h3>
            <img src={src} alt={alt} className=''/>
            <br />
            <h2> <b> Pic by:  </b> {photographer.toLowerCase()} </h2> 
            <a href={photographer_url}> See more to {photographer} work </a> 
            <br /><br />
            <a href={url} > HD Pic View </a>
            <br /><br />
            <DetailsButton type="details" to={`photo/${photoId}`} />
        </div>
    </div>

);

export default Photo

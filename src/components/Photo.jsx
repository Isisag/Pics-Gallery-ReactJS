import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"
import Paper from "@material-ui/core/Paper"
import Details from "./Details"
import DetailsButton from './DetailsButton';

const Photo = ({ photographer, photographer_url, src, url, alt, photoId }) => (

    <Paper className="paper-adjust">
        <div className="photo-card">
            <h3> {alt} </h3>
            <img src={src} alt={alt} className='img-card'/>
            <br />
            <h2> <b> Pic by:  </b> {photographer.toLowerCase()} </h2> 
            <a href={photographer_url}> See more to {photographer} work </a> 
            <br /><br />
            <a href={url} > HD Pic View </a>
            <br /><br />
            <DetailsButton type="details" to={`photo/${photoId}`} />
        </div>
    </Paper>

);

export default Photo

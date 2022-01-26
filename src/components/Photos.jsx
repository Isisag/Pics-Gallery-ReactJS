import React from 'react';
import "../App.css"
import PhotoContext from '../contexts/PhotosContext';
import Photo from "./Photo";
import Grid from "@material-ui/core/Grid";


const Photos = ({ photo }) => (

    <Grid container justifyContent="center" className='photo-card-container'>
       
            {
            photo.map((photo) => {
                return(
                    <Photo 
                    key={photo.id}
                    photoId={photo.id}
                    photographer={photo.photographer}
                    photographer_url={photo.photographer_url}
                    src={photo.src.medium}
                    url={photo.url}
                    alt={photo.alt}
                    />
                )
           })}

    </ Grid>
   
)

export default Photos;

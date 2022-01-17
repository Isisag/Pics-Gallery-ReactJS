import React, {useContext} from 'react';
import PhotoContext from '../contexts/PhotosContext';
import Photo from "./Photo";
import Grid from "@material-ui/core/Grid";


const Photos = ({ photo }) => (

    <Grid container justifyContent="center">
       
            {
            photo.map((photo) => {
                return(
                    <Photo 
                    key={photo.id}
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

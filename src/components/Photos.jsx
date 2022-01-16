import React, {useContext} from 'react';
import PhotoContext from '../contexts/PhotosContext';
import Photo from "./Photo";
import Grid from "@material-ui/core/Grid";



const Photos = ({ photo, color, doneFetch }) => {

 
    return (
        <Grid>
            <Photo />
        </Grid>
    )
}

export default Photos;

import React, { Fragment, useContext } from 'react'
import { PhotosContext } from '../contexts/PhotosContext';
import Photos from './Photos';
import Grid from "@material-ui/core/Grid"


const PicsView = () => {

    const { photo } = useContext(PhotosContext);

    return (
        <Fragment>
            <Photos photo={photo} id={photo.photographer_id}/>
        </Fragment>
    )
}

export default PicsView

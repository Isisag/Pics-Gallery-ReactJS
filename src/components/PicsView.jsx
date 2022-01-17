import React, { Fragment, useContext } from 'react'
import { PhotosContext } from '../contexts/PhotosContext';
import Photos from './Photos';
import Grid from "@material-ui/core/Grid"
import ColorButtons from './ColorButtons';

const PicsView = () => {

    const { photo } = useContext(PhotosContext);

    return (
        <Fragment>
            <ColorButtons />
            <Photos photo={photo} id={photo.photographer_id}/>
        </Fragment>
    )
}

export default PicsView

import React, { Fragment, useContext } from 'react'
import { PhotosContext } from '../contexts/PhotosContext';
import Photos from './Photos';



const PicsView = () => {

    const { photo, query } = useContext(PhotosContext);

    return (
        <Fragment>
            <Photos photo={photo} />
        </Fragment>
    )
}

export default PicsView

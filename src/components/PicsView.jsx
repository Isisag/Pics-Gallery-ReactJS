import React, { Fragment, useContext } from 'react'
import { PhotosContext } from '../contexts/PhotosContext';
import Photos from './Photos';
import Grid from "@material-ui/core/Grid"

const PicsView = () => {

    const { photo, color, doneFetch } = useContext(PhotosContext);

    // useEffect( () => {
    //     console.log("saludo")
    // }, [])

    // const [photo, setPhoto] = useState();

    // const getPhotoData = () => {

    // } 


    return (
        <Fragment>
            <Photos>

            </Photos>
        </Fragment>
    )
}

export default PicsView

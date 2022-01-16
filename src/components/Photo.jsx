import React, {useContext, useEffect} from 'react'
import Paper from "@material-ui/core/Paper"

const Photo = ({ photo, color, doneFetch }) => {

    

    useEffect( ()=> {
        console.log('testing photo')
    },[]);


    return (
        <Paper>
            <p> IM A PHOTO COMPONENT </p>
            <p> IM A PHOTO COMPONENT </p>
            <p> IM A PHOTO COMPONENT </p>
        </Paper>
    )
};

export default Photo

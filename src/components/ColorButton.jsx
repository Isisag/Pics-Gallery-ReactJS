import React , { Fragment, useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import PhotoContext from '../contexts/PhotosContext';
import {getColor, api_key} from "../endpoint"



const ColorButton = () => {

    // useEffect( () => {
    //     changeColor();
    // },[])

    return (
        <Fragment>
            <Button 
            variant="contained" 
            onClick={() => {
                alert("a");
            }}
            >
            Red 
             </Button>


          <Button variant="contained" > Blue </Button>
          <Button variant="contained" > Green </Button>

        </Fragment>
        
            
    )
}

export default ColorButton

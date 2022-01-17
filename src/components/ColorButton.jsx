import React , { Fragment, useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import {getColor, api_key} from "../endpoint"



const ColorButton = ({color}) => {

    // useEffect( () => {
    //     changeColor();
    // },[])

    function test(){

        getColor() 
    }

    return (
        <Fragment>
            <Button 
            variant="contained" 
            onClick={() => {
                ;
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

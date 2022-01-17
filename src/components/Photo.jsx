import React, {useContext, useEffect} from 'react'
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"

const Photo = ({ photographer, photographer_url, src, url, alt }) => (

    <Card>

        <img src={src} alt={alt} />
        <br />
        <span> {alt} </span>
        <br />
        <h3> <b> Fotografo: </b> {photographer} </h3> 
        <br />
        <span> <b> Link: </b> {photographer_url} </span>
        <br />
        <span> <b> url foto: </b> {url} </span>

    </Card>

);

export default Photo

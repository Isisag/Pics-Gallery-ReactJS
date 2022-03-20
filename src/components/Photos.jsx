import React from 'react';
import "../App.css"
import Photo from "./Photo";



const Photos = ({ photo }) => (

    <div className=' flex flex-wrap justify-center'>
            {
            photo.map((photo) => {
                return(
                    <Photo 
                    key={photo.id}
                    photoId={photo.id}
                    photographer={photo.photographer}
                    photographer_url={photo.photographer_url}
                    src={photo.src.medium}
                    url={photo.url}
                    alt={photo.alt}
                    />
                )
           })}

    </ div>
   
)

export default Photos;

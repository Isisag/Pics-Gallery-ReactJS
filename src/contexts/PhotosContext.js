import React , { useState, createContext, useEffect } from 'react';
import { getPhoto, api_key, getColorUrl } from "../endpoint"

export const PhotosContext = createContext();

const PhotosContextProvider = ({children}) =>{

    const [color, setColor] = useState()
    const [photoDetails, photoDetailsSet] = useState([])
    const [photo, setPhoto] = useState([])

    useEffect( ()=> {
        getImage();
        console.log("se esta haciendo la llamada");
    },[]);
    
          const getImage = () => {

                fetch( getPhoto(), {
                    method: 'GET',
                    headers:{
                 Authorization: api_key
              }
                })
                .then( (res) => res.json())
                .then( (data) => {
                    setPhoto(data.photos);
                    console.log(data)
                })
                .catch((err) => console.log(err));
            };


    return(
       <PhotosContext.Provider value={{ color, photo }}>
           {children}
       </PhotosContext.Provider>
    )

};

export default PhotosContextProvider;


import React , { useState, createContext, useEffect } from 'react';
import { getPhoto, api_key, getColor } from "../endpoint"

export const PhotosContext = createContext();

const PhotosContextProvider = ({children}) =>{

    const [color, setColor] = useState([])
    const [photo, setPhoto] = useState([])
    const [doneFetch, setDoneFetch] = ("")

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

            const getImageColor = () => {
                fetch(getColor(),{
                    method: 'GET',
                    headers: {
                        Autorization: api_key
                    }
                })
                .then( (res) => res.json())
                .then( (data) => {
                    setColor(data.photos)
                    console.log(data)
                })
                .catch( (err) => console.log(err))
            }


    return(
       <PhotosContext.Provider value={{color, photo, doneFetch}}>
           {children}
       </PhotosContext.Provider>
    )

};

export default PhotosContextProvider;


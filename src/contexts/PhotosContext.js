import React , { useState, createContext, useEffect } from 'react';
import { getPhoto, api_key, getColorUrl } from "../endpoint"

export const PhotosContext = createContext();

const PhotosContextProvider = ({children}) =>{

    // const query = "query=flower"

    const [color, setColor] = useState()
    const [photoDetails, photoDetailsSet] = useState([])
    const [photo, setPhoto] = useState([])
    const [query, setQuery] = useState('query=tree')
    const [type, setType] = useState('tree')
    // const [doneFetch, setDoneFetch] = useState("")


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

       const queryChangeUrl = `https://api.pexels.com/v1/search?&${query}&orientation=square&per_page=50`
       const changeQuery = () => {
                fetch( queryChangeUrl, {
                    method: 'GET',
                    headers:{
                Authorization: api_key
            }
                })
                .then( (res) => res.json())
                .then( (data) => {
                    
                   
                        console.log('aqui es flower')
                        setPhoto(data.photos);
                        setQuery('flower');
                    
                        console.log('aqui es tree')
                        setPhoto(data.photos)
                        setQuery('query=tree')
                        setType('tree')
                   
                    console.log(data)
                })
                .catch((err) => console.log(err));


       }


    return(
       <PhotosContext.Provider value={{ color, photo }}>
           {children}
       </PhotosContext.Provider>
    )

};

export default PhotosContextProvider;


import React , { useState, createContext, useEffect } from 'react';
import { getPhoto, api_key } from "../endpoint"

export const PhotosContext = createContext();

const PhotosContextProvider = ({children}) =>{

    const [color, setColor] = useState("red")
    const [photo, setPhoto] = useState([])
    const [doneFetch, setDoneFetch] = ("doneFetch")

    useEffect( ()=> {
        console.log("solo prueba")
        getImage();
    },[]);
    
    async function getImage(){ 
        //   const data = fetchImages(baseUrl);
        //   console.log(data)
      
          const response = fetch(getPhoto(),{
              method: 'GET',
              headers:{
                Authorization: api_key
              }
          });
      


          const data =  await response.json();
          console.log(data)
      };


    
    return(
       <PhotosContext.Provider value={{color, photo, doneFetch}}>
           {children}
       </PhotosContext.Provider>
    )

};


export default PhotosContextProvider;

// const [color, setColor] = useState("red");

//     // const getPhoto = (query) => {
//     //     fetch(getPhoto(query))
//     //     .then( (data) => data.json())
//     //     .then( (res) => setPhoto(res.client.photos.search))
//     //     .catch( (err) => console.log(err))
//     // }
//     const client = createClient('563492ad6f91700001000001abf7907093024695b4909bad840b1bef');
    
//     const query = 'Nature';
    
//     const getPhoto = ( {query} ) => {
//      fetch(client.photos.search({ query, per_page: 1 }))
//     .then(photos => photos.json())

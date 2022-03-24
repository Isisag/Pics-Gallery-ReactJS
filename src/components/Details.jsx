import {React , useEffect, useState } from 'react'
import DetailsButton from './DetailsButton'
import { useParams } from 'react-router-dom'
import { api_key } from '../endpoint'

const Details = () => {

    
    const {id} = useParams()
    console.log(id)

    const [info, setInfo] = useState([])
    const [pic, setPic] = useState({})

    const getInfo = () => {
        fetch( `https://api.pexels.com/v1/photos/${id}`, {
            method: 'GET',
            headers:{
         Authorization: api_key
      }
        })
        .then( (res) => res.json())
        .then( (data) => {
            setInfo(data);
            setPic(data.src);
            console.log(data)
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        getInfo()
        console.log(getInfo())
    }, [id])
    

  return (
   <>
       <img src={pic.small} alt={info.alt} />
       <p>{info.alt}</p>
       {/* <DetailsButton /> */}

   </>
  )
  
}

export default Details
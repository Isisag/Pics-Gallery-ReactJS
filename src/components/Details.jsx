import {React , useEffect, useState } from 'react'
import DetailsButton from './DetailsButton'
import { useParams } from 'react-router-dom'
import { api_key } from '../endpoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faImage } from '@fortawesome/free-solid-svg-icons'

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
   <>   <div className='text-center mx-auto flex justify-center flex-wrap'>
       <div className='flex flex-col my-auto mx-2 justify-center'>
       <h1 className='font-extrabold mt-3 text-2xl'>{info.alt}</h1>
       <h2 className='mb-6 font-bold uppercase text-blue-400 text-xl'><a href={info.photographer_url}>{info.photographer}</a></h2>
       {/* <DetailsButton /> */}
        <h2 className='text-blue-500 italic cursor-pointer'><a href={info.photographer_url}> See More About {info.photographer}'s 
        <FontAwesomeIcon icon={faHeart} className='mx-1 text-red-500' /> </a></h2>
        <a href={info.url} className='uppercase font-semibold bg-blue-200 px-5 rounded-2xl w-40 mx-auto' >
            <FontAwesomeIcon icon={faImage} className='mx-1' />
                hd photo </a>
        </div>
       <img src={pic.large} alt={info.alt} className='p-2'/>

        </div>
   </>
  )
  
}

export default Details
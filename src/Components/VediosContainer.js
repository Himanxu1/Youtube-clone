import React, { useEffect ,useState} from 'react'
import { YOUTUBE_VEDIO_URL } from '../utils/constant'
import Vedio from './Vedio'
import { Link } from 'react-router-dom'

const VediosContainer = () => {
    const [vedios,setVedios] = useState([])
   
    useEffect(()=>{
      getApiData()
    },[])
    const getApiData = async()=>{
     const data = await fetch(YOUTUBE_VEDIO_URL)
     const res =await data.json()
     setVedios(res.items)
    }
    
  return (
    <div className='flex flex-wrap mt-4'>
        {
            vedios.map((vedio,index)=>{
                return (
                    <>
                     <Link to={'/watch?v='+vedio.id}>
                       <Vedio item={vedio} key={index} />
                     </Link>
                    </>
                )
            })
        }
    </div>
  )
}

export default VediosContainer
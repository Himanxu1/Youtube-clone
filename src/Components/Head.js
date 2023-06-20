import React,{useEffect, useState} from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'


const Head = () => {
  const [searchText,setSearchText] = useState("")
  const [suggestions,setSuggestion] = useState([])
  const [showSuggestion,setShowSuggestion] = useState(false)
  const dispatch = useDispatch()

  const searchCache = useSelector((store)=>store.search)
  
  const handleToggle = () =>{
      dispatch(toggleMenu())
  }

 useEffect(()=>{
      // console.log(searchText)
    const timer = setTimeout(()=>{
     
      if(searchCache[searchText]){
        setSuggestion(searchCache[searchText])
      }else{
        getSuggestionText()
      }
    }
    ,200)
    return () =>{
      clearTimeout(timer)
    }
 },[searchText])

 const getSuggestionText = async () =>{
  const data = await fetch(YOUTUBE_SEARCH_API+searchText)
  const res =await data.json()
  setSuggestion(res[1])
  //  update Cache
  dispatch(cacheResults({
    [searchText]:res[1],
  }))
 }
  return (
    <>
    
    <div className='flex justify-between items-center px-6 shadow-md '>
      <div className='flex items-center'>
        <img  src='https://www.svgrepo.com/show/506800/burger-menu.svg' className='h-8 cursor-pointer' onClick={handleToggle} />
        <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" className=' h-14 ml-4' />
      </div>
      <div className='flex items-center'>
        <div>
          <div>
        <input type='text' className='w-[600px] h-10 rounded-xl border-2 border-black ' value={searchText}       onChange={(e)=>setSearchText(e.target.value)} 
         onFocus={()=>setShowSuggestion(true)}
         onBlur={()=>setShowSuggestion(false)}
        />
        <div className='absolute bg-white w-[37rem] rounded-b-lg shadow-md'>
        <ul className=''>
          { showSuggestion && suggestions?.map((s,index)=>{
            return (
              <>
              <li key={index} className='flex items-center pl-2 py-2 hover:bg-slate-100'><BsSearch className='mr-2'/>{s}</li>
              
              </>
            )
          })}
        </ul>
      </div>
          </div>
        </div>
        <BsSearch className='w-8 h-8 ml-4' />
      </div>
      <div>
       <FaUserCircle className='w-10 h-10' />
      </div>
      
    </div>
    </>
    
  )
}

export default Head
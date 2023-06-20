import React from 'react'
import {FaUserCircle} from 'react-icons/fa'

const Comment = ({data}) => {
  const {name,text,replies} = data
  return (
    <div className='my-2 bg-gray-100 p-2 w-[800px] '>
      <div className='flex items-center'>
        <FaUserCircle className='w-10 h-10'/>
        <div className='ml-4'>
           <p>{name}</p>
           <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment
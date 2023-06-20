import React from 'react'
import {FaUserCircle} from 'react-icons/fa'

const LiveMessage = ({name,text}) => {
  return (
    <div className='flex items-center p-2'>
        <FaUserCircle className="w-6 h-6"/>
        <p className='ml-2 font-semibold'>{name}</p>
        <p className='ml-2'>{text}</p>
    </div>
  )
}

export default LiveMessage
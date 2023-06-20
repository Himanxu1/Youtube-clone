import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isOpen = useSelector(store=> store.app.isMenuOpen)
 if (!isOpen) return null;
  return (
    <div className='w-72 shadow-md  p-4 pl-6  h-[610px]'>
      <ul>
      <Link to='/'>
       <li className='text-lg hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>👻 Home</li>
      </Link> 
        <li className='text-lg hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🎞 Shorts</li>
        <li className='text-lg hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🎮 Live</li>
      </ul>
      <h1 className='font-bold mt-4'>Subscription</h1>
      <ul className='p-2'>
        <li className='mt-2 hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🎵 Music</li>
        <li className='mt-2 hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🏐 Sports</li>
        <li className='mt-2 hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🎮 Gaming</li>
        <li className='mt-2 hover:bg-gray-100 hover:cursor-pointer  hover:rounded-lg'>🎞 Movies</li>
      </ul>
      <h1 className='font-bold mt-4'>Watch Later</h1>
      <ul className='p-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold mt-4'>Watch Later</h1>
      <ul className='p-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold mt-4'>Watch Later</h1>
      <ul className='p-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      
    </div>
  )
}

export default Sidebar
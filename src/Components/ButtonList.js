import React from 'react'

const buttons  = [
    "All",
    "Mixes",
    "Music",
    "Computer Programming",
    "Gaming",
    "Software develpment",
    "Movies",
    "Relax Music",
    "AI",

   
]

const ButtonList = () => {
  return (
    <div className=''>
        <ul className='flex  mt-4 '>
            {buttons.map((button,index)=>{
                return (
                    <>
                    <li  key={index} className='ml-2 bg-gray-200  px-4 py-2  rounded-md hover:bg-gray-300'>{button}</li>
                    </>
                )
            })}
        </ul>
    </div>
  )
}

export default ButtonList
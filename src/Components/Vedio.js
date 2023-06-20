import React from 'react'

const Vedio = (props) => {
  const {statistics} = props.item
  const {title,thumbnails} = props.item.snippet
  return (
    <div className='p-2'>
        <img  src={thumbnails.high.url} className='w-60 h-44 rounded-xl'/>
        <p className='w-64'>{title.slice(0,40)}..</p>
        <p>{statistics.viewCount}</p>
    </div>
  )
}

export default Vedio
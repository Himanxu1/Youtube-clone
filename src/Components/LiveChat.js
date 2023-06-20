import React, { useEffect,useState } from 'react'
import LiveMessage from './LiveMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice'
import { generateRandomName } from '../utils/helper'

const LiveChat = () => {
   const [liveMessage,setLiveMessage] = useState("")
    const dispatch = useDispatch()
   const chatMsg = useSelector((store)=>store?.chat?.message)
    useEffect(()=>{
      const i=  setInterval(()=>{
      console.log("Api polling")
      dispatch(addMessage({
        name: generateRandomName(),
        text:"hello there!"
      }))
        },2000)
        return () =>{
            clearInterval(i)
        }
    })
    const handleSubmit = (e) =>{
        
        // dispatch(addMessage({
        //     name:"Himanshu singh",
        //     text:liveMessage
        // }))
    }
  return (
    <>   
    <div className='border bg-slate-100 border-black h-[500px] w-[400px] overflow-y-scroll  flex-col-reverse'>
        <div>
        {
            chatMsg.map((c,index)=>{
                return (
                    <LiveMessage key={index} name={c.name} text={c.text}/>
                )
            })
        }
        </div>
    </div>
        <form className='w-[500px] mt-2 ' onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Himanshu singh",
                text:liveMessage
            }))
            // setLiveMessage("")
          
        }}>
            <input type='text' className='w-80 border border-black' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
            <button className='mx-2 px-2 bg-slate-500' onClick={handleSubmit}>send</button>
        </form>
    </>
  )
}

export default LiveChat
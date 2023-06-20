import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'


const commentsData  = [
    {
        name:"Himanshu singh",
        text:"this is a reply",
        replies:[
            {
                name:"rohan kumar",
                text:"this is one leve reply",
                replies:[
                    {
                        name:"sanu singh",
                        text:"this is two level reply",
                        replies:[
                            {
                                name:"kiran singh",
                                text:"this is three level reply",
                                replies:[
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Himanshu singh",
        text:"this is a reply",
        replies:[
            {
                name:"manni singh",
                text:"this is one reply",
                replies:[
                    
                ]
            }
        ]
    },
 
]

const CommentContainer = () => {
  return (
    <div>
        <p className='text-xl font-semibold'>Comments:</p>
        <CommentList commentsData={commentsData}/>
    </div>
  )
}

export default CommentContainer
import React from 'react'
import Comment from './Comment'

const CommentList = ({commentsData}) => {
  return (
    <div>
        {
            commentsData?.map((comment)=>{
                return (
                    <>
                    <Comment data={comment} />
                    <div className='border-l-black border-l ml-4'> 
                     <CommentList commentsData={comment.replies} />
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default CommentList
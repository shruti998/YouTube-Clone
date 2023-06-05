import React from 'react'
const commentData=[
    {
        name:"Shruti",
        text:"hello1",
        replies:[
            {
                name:"Shruti21",
                text:"hello1",
                replies:[
                    {
                        name:"Shruti2",
                        text:"hello1",
                        replies:[
                            {
                                name:"Shruti22 ",
                                text:"hello1",
                                replies:[
                                    {
                                        name:"Shruti2",
                                        text:"hello1",
                                        replies:[
                                            
                                        ]
                                    }   
                                ]
                            } 
                        ]
                    }   
                ]
            }
        ]

    },
    {
        name:"Shruti2",
        text:"hello1",
        replies:[
            
        ]
    }
    ,
    {
        name:"Shruti3",
        text:"hello1",
        replies:[
            
        ]
    }
]

const Comment=({data})=>
{
   const {name,text,replies} =data; 
return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img className="h-12 w-12" alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>  
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        </div>

        </div>
}

const CommentList=({comments})=>{
return comments.map((comment,index)=>(
    <div>
        <Comment  key={index} data={comment}/>
   <div className="pl-10">
<CommentList comments={comment.replies}/>
   </div>
    </div>

   ) )
    
  
}
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
    <h1 className="text-xl font-bold">Comment</h1>
  <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer

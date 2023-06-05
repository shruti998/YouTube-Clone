import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { getRandomName, makeRandomMessage } from '../utils/helper'


const LiveChat = () => {
  const [liveMessage, setLiveMessage]= useState("");
    const dispatch= useDispatch();
    const chatMessage= useSelector((store)=>store.chat.messages)
    useEffect(()=>{
       const i= setInterval(()=>{
// API poling
console.log("API poling ")
dispatch(addMessage({
    name: getRandomName(),
    message:makeRandomMessage(20)

}))
        },2000);
        return ()=>clearInterval(i);
    },[])
  return (
    <>
    <div className="p-2 ml-2 w-500 h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
   <div>
    
{chatMessage.map((c,index)=>  <ChatMessage key ={ index}name={c.name} message={c.message}/>)}
    </div>

   </div>
   <form className=" w-full p-2 m-2  border border-black-100 flex " onSubmit={((e)=>{
    e.preventDefault();
    console.log("On_Form_Submit")
    dispatch(addMessage({
      name: "akshay",
      message: liveMessage
    }))
    setLiveMessage("")
   })}>
  <input className=" w-70"type='text' value={liveMessage} onChange={(e)=>{
    setLiveMessage(e.target.value
      );
  }}/>
  <button className=" px-2 m-2 bg-green-50">send</button>
</form>
   </>
  )
}

export default LiveChat

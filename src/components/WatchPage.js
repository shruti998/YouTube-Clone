import React, { useEffect } from 'react'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParam]= useSearchParams()
    console.log(searchParam.get("v"))
    const dispatch = useDispatch();
    useEffect(()=>{
dispatch(closeMenu())
    },[])
  return (
    <div className="px-5 flex w-full">
<div>
<iframe width="1100" height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <CommentContainer/>
</div>
    <div className="w-full">
      <LiveChat/>
      </div>
    </div>
  
  )
}

export default WatchPage

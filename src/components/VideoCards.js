import React from 'react'

const VideoCards = ({info}) => {
    console.log("info12333 "+info);
    const {snippet, statistics}=info;
    const{channelTitle, title,thumbnails}=snippet;
  return (
    <div className="p-2 m-2 w-72 shadow">
     <img className="rounded-lg" alt="video-img" src={thumbnails.medium.url}/>
     <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
     </ul>

    </div>
  )
}
// higher order component
const AdVideoComponent= ({info})=>{
  return(
    <div className="p-1 m-1 border-red-500">
      <VideoCards info={info}/>
    </div>
  )
}
export default VideoCards

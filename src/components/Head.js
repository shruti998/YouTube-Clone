import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResult } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery]= useState("")
  const [suggestion, setSuggestion]= useState([])
  const [showSuggestion, setShowSuggestion]= useState(false)
   const searchCache= useSelector((store)=>store.search)
  
   const dispatch= useDispatch();
  
   useEffect(()=>{
    //API call

    console.log(searchQuery);
    //make an api call after every key press
    // but if the difference between 2 api call is <200ms
    //decline the api call
    const timer= setTimeout(()=>{
      if(searchCache[searchQuery])
    {
      setSuggestion(searchCache[searchQuery])
    }
    else{
      getSearchSuggestions()
    }
    },200);

    
return ()=>{
  clearTimeout(timer);
};
  },[searchQuery]);
  
  const getSearchSuggestions= async()=>{
    const data= await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json= await data.json()
   // console.log(json[1])
   setSuggestion(json[1]);
   // update cache
   dispatch(cacheResult({
    [searchQuery]:json[1],
   }));
  };

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    };
  return (
   <div className="grid grid-flow-col p-5 m-2 shadow">
     <div className="flex col-span-1">
    
      <img  onClick= {()=>toggleMenuHandler()} className="h-8 cursor-pointer"   alt="menu" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"/>
 
    <a href='/'>
      <img className="h-8 ml-3" alt="youtube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
      </a>
    </div>
    <div className="col-span-10">
<div>
<input className="w-1/2  px-5 border  border-gray-400 p-2 rounded-l-full" type='text'
value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value
)
} onFocus={()=>setShowSuggestion(true)}
onBlur={()=>setShowSuggestion(false)}/>
<button className="border border-gray-400 p-2 rounded-r-full">Search</button>

</div>
{showSuggestion&&(<div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg border border-gray-100 ">
  <ul>
    { suggestion.map(s=>  <li key={s}className="py-2 shadow-sm hover:bg-gray-100">{s}</li>)}
  

  </ul>

</div>)}
    </div>
    <div className="col-span-1">
      <img className="h-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>  
    </div>
   </div>
  )
}

export default Head

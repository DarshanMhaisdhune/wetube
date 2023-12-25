import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './Utils/Constants';
import VideoCart from './VideoCart';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const VideoContainer = () => {

  const menuState = useSelector((store) =>store.app.isMenuOpen);
  // console.log(menuState);
  const [videos, setVideos] = useState([]);  

  function goToHomePage() {
    window.location = "/";
  }

 
  const getVideos= async()=>{
    const data =await fetch(YOUTUBE_VIDEOS_API);
    const json =await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  useEffect(()=>{

    getVideos();
  },[])

  
  if(!getVideos) return null ;
  
   return (
    <div className='flex no-scrollbar'>
      {(!menuState &&     
      <div className='flex flex-col h-full w-24 bg-black text-white text-xs mt-32 no-scrollbar fixed'>
            <div onClick={goToHomePage} className='bg-white bg-opacity-0 w-20 h-20 mx-auto py-4 px-2 rounded-lg hover:bg-opacity-20 '><span><GoHome className='ml-2' size={30} /></span><span className='px-2'>Home</span></div>
            <div className='bg-white bg-opacity-0 w-20 h-20 mx-auto py-4 px-2 rounded-lg hover:bg-opacity-20 '><span><SiYoutubeshorts className='ml-2' size={30} /></span><span className='px-2'>Shorts</span></div>
            <div className='bg-white bg-opacity-0 w-20 h-20 mx-auto py-4 px-2 rounded-lg hover:bg-opacity-20 '><span> <MdOutlineSubscriptions className='ml-2' size={30} /></span><span>Subscriptions</span></div>
            <div className='bg-white bg-opacity-0 w-20 h-20 mx-auto py-4 px-2 rounded-lg hover:bg-opacity-20 '><span><MdOutlineVideoLibrary className='ml-2' size={30} /></span><span className='px-3'>You</span></div>     
      </div>)} 
      <div className='mt-32 ml-24 w-full no-scrollbar h-auto grid grid-cols-4 bg-black'>        
          {videos.map(video =>(<Link key={video.id} to={"/watch?v="+video.id}><VideoCart  info={video}/></Link>))}        
      </div>
    </div>
  )  
  
}

export default VideoContainer;
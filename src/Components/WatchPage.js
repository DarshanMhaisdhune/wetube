import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './Utils/appSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOS_API } from './Utils/Constants';
import { LuThumbsUp } from "react-icons/lu";
import { FiThumbsDown } from "react-icons/fi";
import { MdThumbUp } from "react-icons/md";
import { MdThumbDown } from "react-icons/md";
import CommentContainer from './CommentContainer';
import { FaRegCircleUser } from "react-icons/fa6";
import SuggestedVideoCart from './SuggestedVideoCart';
import { Link } from 'react-router-dom';


const WatchPage = () => {

  const location  = useLocation();
    const dispatch = useDispatch();
    const[searchParams]= useSearchParams();
    // console.log(searchParams.get("v"));
    const [videos, setVideos] = useState([]);  
    const [liked, setLiked] = useState(false);
    const[disLiked,  setDisLiked] = useState(false);
    const handleLikeClick=()=>{        
        setLiked(!liked);
    }
    const handleDisLikeClick=()=>{
        setDisLiked(!disLiked);
    }
    
        
    function formatNumber (num) {
      var suffix = "";
      if (num >= 1000000000) {
        num = num / 1000000000;
        suffix = "B";
      } else if (num >= 1000000) {
        num = num / 1000000;
        suffix = "M";
      } else if (num >= 1000) {
        num = num / 1000;
        suffix = "K";
      }
      return num.toFixed (2) + suffix;
    }

    

 
    const getVideos= async()=>{
    const data =await fetch(YOUTUBE_VIDEOS_API);
    const json =await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
    useEffect(()=>{
      getVideos();
        dispatch(closeMenu()) ;
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },[location])
  return (
    <>
   <div className='flex flex-col w-2/3 h-auto bg-gray-900'>
        <div className='mt-32  px-7 pt-4 bg-gray-900'>
          <iframe className='rounded-xl' width="900" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?rel=0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>    
        <div className='w-full h-auto my-4 px-7 bg-gray-900 text-white'>
           { videos.filter(video=> video.id === searchParams.get("v") ).map(video=>(
            <div key={video.id} className='flex'>
              <div>
                <p className='text-2xl my-3'>{video.snippet.title}</p>
               <span className='inline-block'><FaRegCircleUser size={24} /></span> <p className='font-bold mx-1 text-xl text-gray-200 inline-block'>{video.snippet.channelTitle}</p>
              </div>
              <div className='flex gap-1 items-center rounded-3xl border-2 border-white w-44 h-12 ml-80 mt-7 hover:bg-gray-700'>
                <span onClick={handleLikeClick} className='pl-2'>{liked ? <MdThumbUp  size={24} />:<LuThumbsUp size={24} />}</span>
                <p className='font-medium'>{formatNumber(video.statistics.likeCount)}</p>
                <span className='w-[2px] h-[24px] mx-1 bg-white'></span>
                <span  onClick={handleDisLikeClick} className='mx-2' >{disLiked ? <MdThumbDown size={24} /> :<FiThumbsDown size={24} />}</span>
              </div>
            </div>
           )) }
            
        </div>
        <div className='w-full px-4 py-2 h-auto bg-gray-950 text-white rounded-lg'>
          <h1 className='font-bold text-xl'>Comments -</h1>
          <CommentContainer/>
        </div>
   </div>
   <div className='bg-gray-900 h-auto w-full mt-32 '>
   {videos.map(video =>(<Link key={video.id} to={"/watch?v="+video.id}><SuggestedVideoCart  data={video}/></Link>))} 
           
   </div>
   </>
  )
}

export default WatchPage;
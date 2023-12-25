import React from 'react' ;
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { FaFireAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiMusicNoteDuotone } from "react-icons/pi";
import { PiFilmSlate } from "react-icons/pi";
import { BsBroadcast } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { GoLightBulb } from "react-icons/go";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { toggleMenu } from './Utils/appSlice';
import { RxHamburgerMenu } from "react-icons/rx";



const Sidebar = () => {
  const menuState =  useSelector((store)=> store.app.isMenuOpen);
  // console.log(menuState);
  const dispatch = useDispatch();
  const toggleMenuBar=()=>{
    dispatch(toggleMenu());
   }
   
    // Define a function that will be called when the div is clicked
    function goToHomePage() {
      window.location = "/";
    }
  
  if(!menuState) return null ;
  return (
    <div className='bg-black w-1/5 h-screen text-white pt-4 absolute z-40 overflow-y-scroll no-scrollbar '>
      <div className='flex '>          
            <div onClick={toggleMenuBar}>
                 <RxHamburgerMenu color='white' size={24} className='m-4 ml-10 cursor-pointer' />
            </div>
            <div className='bg-black w-40'>
                <img  src="/YTLOGO.png" alt="YTLogo" />
            </div>
        </div>
        
      <div onClick={goToHomePage}  className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><GoHome size={24} /></span>Home
      </div>
      <div className='flex gap-7 items-center mx-5 my-1 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><SiYoutubeshorts  size={24} /></span>Shorts
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><MdOutlineSubscriptions  size={24} /></span>Subscriptions
      </div>
      <hr className='border-gray-600  mx-4 mt-2' />
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span className='font-medium text-lg'>Explore</span>
      </div>
      <div className='flex gap-7 items-center mx-5 my-1 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><FaFireAlt  size={24} /></span>Trending
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><FiShoppingBag  size={24} /></span>Shopping
      </div>
      
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><PiMusicNoteDuotone  size={24} /></span>Music
      </div>
      <div className='flex gap-7 items-center mx-5 my-1 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><SiYoutubeshorts  size={24} /></span>Shorts
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><PiFilmSlate  size={24} /></span>Films
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><BsBroadcast size={24} /></span>Live
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><SiYoutubegaming size={24} /></span>Gaming
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><IoNewspaperOutline size={24} /></span>News
      </div>
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><GoTrophy  size={24} /></span>Sport
      </div>      
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><GoLightBulb  size={24} /></span>Learning
      </div>      
      <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><GiHanger size={24} /></span>Fashion & beauty
      </div>    
     <div className='flex gap-7 items-center mx-5 rounded-xl hover:bg-gray-700 h-12 pl-4'>
        <span><MdPodcasts size={24} /></span>Podcasts
      </div>
      

    </div>
  )
}

export default Sidebar;
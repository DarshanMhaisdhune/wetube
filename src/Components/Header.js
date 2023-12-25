import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { PiUserCircleDuotone } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from './Utils/appSlice';
import { YOUTUBE_SEARCH_API } from './Utils/Constants';
import { GoHistory } from "react-icons/go";

const Header = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery]= useState("");
    const [ suggestions, setSuggestions ] = useState([]);
    const [showSuggestions, setShowSuggestions]= useState(false);

  useEffect(()=>{
    // console.log(searchQuery);
     const timer =  setTimeout(() => {
          getSearchSuggestions();      
        }, 300);
        
        return ()=>{
          clearTimeout(timer);
        }
  },[searchQuery]);

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
    };

    const toggleMenuBar=()=>{
    dispatch(toggleMenu());
    };
  return (
    <>
    
    <div className='flex items-center bg-black justify-between px-7 py-2 w-screen'>
        <div className='flex '>          
            <div onClick={toggleMenuBar}>
                 <RxHamburgerMenu color='white' size={24} className='m-4 cursor-pointer' />
            </div>
            <div className='bg-black w-40'>
                <img  src="/YTLOGO.png" alt="YTLogo" />
            </div>
        </div>
        <div className=' w-1/2 '>
          <div className='flex' >
            <input type="text" placeholder='Search' className='w-4/5 py-2 rounded-l-3xl px-4 bg-black border border-gray-600 border-r-0 text-lg text-white' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
              onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
            <button className='w-20  rounded-r-3xl px-4 bg-gray-700 bg-opacity-70'><PiMagnifyingGlassBold color='white' size={24} /></button>
          </div>
          {(suggestions && showSuggestions &&
          <div className='fixed w-[34rem] rounded-xl h-auto mt-1 bg-gray-900 text-white shadow-xl'>
            <ul className='text-lg '>
                 { suggestions.map((s) => 
                      (<li key={s} className='flex items-center font-semibold gap-4 py-1 px-5 my-1 hover:bg-gray-700 cursor-default'>
                        <GoHistory size={24} />{s}
                      </li> )) }         
            </ul>
          </div>
          )}
        </div>
       
        <div>
        <PiUserCircleDuotone color='white' size={34} />
        </div>     
        
    </div>
   
    </>
  )
}

export default Header;
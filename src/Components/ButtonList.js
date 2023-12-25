import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const List = [ "All", "Comedy", "Sport", "News", "Live", "Movies","Songs", "Gaming", "Cooking","apple", "banana", "carrot", "dog", "elephant", "fish", "giraffe", "hat", "ice", "joke", "kite", "lion", "moon", "nest", "ocean", "pencil", "queen", "rainbow", "star", "tree", "umbrella", "vase", "water", "xylophone", "zebra"]
  return (
    <div className='flex bg-black overflow-x-scroll w-screen no-scrollbar whitespace-nowrap'>
      <div className='flex gap-2 m-3 px-3 no-scrollbar'>
        {List.map(li=><Button key={li} name={li} />)}
      </div>
    </div>
  )
}

export default ButtonList;
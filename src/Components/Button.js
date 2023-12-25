import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='flex w-max bg-white bg-opacity-20 text-white px-3 py-1 rounded-lg hover:bg-opacity-30'>{name}</button>
    </div>
  )
}

export default Button;
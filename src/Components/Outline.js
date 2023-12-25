import React from 'react'
import Header from './Header';
import ButtonList from './ButtonList';
import Sidebar from './Sidebar';

const Outline = () => {
  return (
    <div className='fixed'>
        <Sidebar/>
        <Header/>
        <ButtonList/>
    </div>
  )
}

export default Outline;
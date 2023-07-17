import React from 'react';
import './../styles/RoomPage.css';
import Navbar from '../components/Navbar';
import Room from '../components/Room';

const RoomPage = () => {
  return (
    <div className='roompage'>
      <Navbar />
      <Room />
    </div>
  )
}

export default RoomPage
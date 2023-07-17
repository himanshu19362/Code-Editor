import React from 'react';
import './../styles/CreateRoomPage.css';
import Navbar from '../components/Navbar';
import CreateRoom from '../components/CreateRoom';

const CreateRoomPage = () => {
  return (
    <div className='create-room-page'>
        <Navbar />
        <CreateRoom />        
    </div>
  )
}

export default CreateRoomPage
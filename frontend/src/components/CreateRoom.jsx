import React, { useState } from 'react';
import './../styles/CreateRoom.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {

  const [roomId , setRoomId] = useState('');
  const navigate = useNavigate();

 
  const handleJoin = async e => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  }

  const handleCreateRoom = async () => {
    const res = await axios.post(`${import.meta.env.VITE_DB_URL}/room`);
    setRoomId(res.data.room.roomId);
  }

  return (
    <div className='create-room'>
        <div className='create-room-message'>
            <p className='welcome'>Welcome Back</p>
            <p><strong>Himanshu Verma</strong></p>
        </div>
        <div className='create-room-input'>
            <div className='create-room-form'>
                <form onSubmit={handleJoin}>
                    <input type={'text'} placeholder={'ROOM ID'} onChange={e => setRoomId(e.target.value)} value={roomId}/>
                    <button type={'submit'} >Join</button>
                    <p>Want to create a new Room ? <span onClick={handleCreateRoom}>Click Here</span></p>
                </form>                
            </div>
        </div>
         
    </div>
  )
}

export default CreateRoom
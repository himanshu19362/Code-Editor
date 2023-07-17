import React from 'react';
import './../styles/Room.css';
import Sidebar from './Sidebar';
import TextEditor from './TextEditor';

const Room = () => {
  return (
    <div className='room'>
      <Sidebar />
      <TextEditor />

    </div>
  )
}

export default Room
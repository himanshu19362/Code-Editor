import React, { useEffect, useState } from 'react';
import './../styles/TextEditor.css';
import Editor from '@monaco-editor/react';
import { useNavigate, useParams } from 'react-router-dom';
import { socket } from '../socket';
import axios from 'axios';

const TextEditor = () => {

  const [code , setCode] = useState('');
  const params = useParams();
  const navigate = useNavigate();
  const updateCode = async (value , event) => {
    console.log(value);
    socket.emit('update-code' , {roomId : params.roomId , code : value});
  }

  const onCodeUpdate = (message) => {
      console.log("Hello : message is " , message)
      setCode(message);
  }

  const initCode = async () => {
    const room = await axios.get(`${import.meta.env.VITE_DB_URL}/room/${params.roomId}`);
    if(!room.data.room){
      alert('Room doesnot exist');
      navigate('/room');
    }
    setCode(room.data.room.code);    
  }

  useEffect(() => {
    socket.emit('join-room' , {roomId : params.roomId});
    socket.on('update-code' , onCodeUpdate)
    initCode();    
    return () => {
      socket.off('update-code');
    }
  } , []);
  return (
    <div className='text-editor'>
        <Editor height="100%" width="100%" defaultLanguage="cpp" value={code} theme="vs-dark" onChange={updateCode}/>     
    </div>
  )
}

export default TextEditor
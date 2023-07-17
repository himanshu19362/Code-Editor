import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import CreateRoom from './components/CreateRoom.jsx';
import CreateRoomPage from './pages/CreateRoomPage.jsx';
import RoomPage from './pages/RoomPage.jsx';

const router = createBrowserRouter([
  {
    path : '/room' , 
    element : [<CreateRoomPage />]
  } , 
  {
    path : '/room/:roomId' , 
    element : [<RoomPage />]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

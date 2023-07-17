import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CreateRoom from './components/CreateRoom'
import Room from './components/Room'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Navbar />
        <Route path='/room' element={[<CreateRoom />]}/>
      </Routes>

      {/* <Room /> */}
    </div>
  )
}

export default App

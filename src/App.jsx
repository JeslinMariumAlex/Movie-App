import './css/App.css'
import { useState } from 'react';
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {

  const [user] = useState({name: 'John', age: 30});
  

  return (
    <div>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

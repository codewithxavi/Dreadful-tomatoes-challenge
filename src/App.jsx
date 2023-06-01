import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BannerSpash from './components/BannerSpash'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main w-screen bg-black">
        <Navbar></Navbar>
        <BannerSpash></BannerSpash>
        <Footer/>
      </div>

    </>
  )
}

export default App

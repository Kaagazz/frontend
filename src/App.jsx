
import './App.css'
import Navbar from '../components/Navbar'
import Shop from '../pages/Shop'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sustainability from '../pages/Sustainability';
import About from '../pages/About'

function App() {

  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sustainability" element={<Sustainability/>} />
      <Route path="/shop" element={ <Shop/> } />
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App

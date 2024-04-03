import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <nav className='w-full md:w-4/5 mx-auto'>
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default App

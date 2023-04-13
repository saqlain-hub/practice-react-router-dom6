import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Author from './components/Auhtor'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/saqlain' element={ <Author />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

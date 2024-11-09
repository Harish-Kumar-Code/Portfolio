
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Skills from './Skills';
import Expertise from './Expertise';
function App() {
  return (
    <>

      <BrowserRouter>
        <Header/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/Expertise' element={<Expertise/>}/>
          <Route path='/projects' element={<Projects/>}/>
          
          
        
        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  );
}

export default App;

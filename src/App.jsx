 import { BrowserRouter ,Routes, Route } from 'react-router-dom';

 import Navbar from './components/Navbar';
 import Home from "./components/Home"; 
 import About from "./components/About";
 import Products from "./components/Products";
 import ServicePage from "./components/Service";
 import Login from "./components/Login";
 import Footer from './components/Footer';

//import Resume from "./pages/Resume";

 function App() {
  return (

   
    <BrowserRouter>

    <Navbar />
    

    <Routes>
      
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Products' element={<Products />} />
    <Route path='/Service' element={<ServicePage />} />
    <Route path='/Login' element={<Login />} />
    
    </Routes>
    
    <Footer />
    
    </BrowserRouter>
    // <>
    //  <Resume />
    // </>

  )
 }

 export default App;

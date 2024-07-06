import React from 'react'
import Homepage from './Homepage/Homepage'
import Footer from './Homepage/Footer'
import Header from './Homepage/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Otherpage/About';
import Blog from './Otherpage/Blog';
import Catelouge from './Otherpage/Catelouge';
import Contact from './Otherpage/Conatct';



function App() {
  return (


<BrowserRouter>
<Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path="catelouge" element={<Catelouge />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
)
}

export default App
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Learn from './Components/Learnpage/Learn';
import References from './Components/References/References';
import Register from './Components/Register/Register';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/learn' element={<Learn />}></Route>
        <Route path='/reference' element={<References/>}></Route>
        <Route path='/community' element={<h1>Community</h1>}></Route>
        <Route path='/blog' element={<h1>Blog</h1>}></Route> 
        <Route path='/git' element={<h1>Git Page</h1>}></Route> 
        <Route path='/github' element={<h1>Github Page</h1>}></Route> 
        <Route path='/register' element={<Register />}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

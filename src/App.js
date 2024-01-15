import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/learn' element={<h1>Learnpage</h1>}></Route>
        <Route path='/reference' element={<h1>Referencepage</h1>}></Route>
        <Route path='/community' element={<h1>Community</h1>}></Route>
        <Route path='/blog' element={<h1>Blog</h1>}></Route> 
        <Route path='/git' element={<h1>Git Page</h1>}></Route> 
        <Route path='/github' element={<h1>Github Page</h1>}></Route> 
        <Route path='/register' element={<h1>Registration Page</h1>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

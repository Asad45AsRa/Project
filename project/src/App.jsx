import React from 'react'
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Services from './Components/Services.jsx';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ApiPenetrationTesting from './Components/ApiPenetrationTesing';
import IosPenetration from './Components/IosPenetration';
import Android from './Components/Android';
import SourceCode from './Components/SourceCode';
import WebApplication from './Components/WebApplication';
import NetworkPen from './Components/NetworkPen'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/services' element = {<Services />} />
      <Route path='/blog' element = {<Blogs />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/android' element = {<Android />} />
      <Route path='/apipenetrationtesting' element = {<ApiPenetrationTesting />} />
      <Route path='/iospeneteration' element = {<IosPenetration />} />
      <Route path='/networkpenetration' element = {<NetworkPen />} />
      <Route path='/sourcecode' element = {<SourceCode />} />
      <Route path='/webapplication' element = {<WebApplication />} />
      <Route path='/*' element = {<Navigate to='/' />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    <Outlet ></Outlet>
    </>
  )
}

export default App
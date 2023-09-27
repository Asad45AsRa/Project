import React from 'react'
import 'F:/coding/Project/project/src/index.css'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Home
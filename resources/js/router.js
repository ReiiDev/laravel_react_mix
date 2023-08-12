import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "./components/pages/Home"
import Blog from "./components/pages/Blog"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import NotFound from "./components/pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route path="/blog"  element={<Blog/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route element={<NotFound/>} />
    </Routes>
  )
}
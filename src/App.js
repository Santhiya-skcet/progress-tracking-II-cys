import React from 'react'
import Home from './Router/Home'
import Sign from './Router/SignIn'
import Signup from './Router/SignUp'
import Blog from './Router/Blogs'
import Layout from './Router/Layout'
import Contact from './Router/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//<Route index element={<Sign/>}/>
const Navigate=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default Navigate;
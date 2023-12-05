import React from 'react'
import Home from './Home'
import Sign from './SignIn'
import SignUp from './SignUp'
import Blog from './Blogs'
import Layout from './Layout'
import Contact from './Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Navigate=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default Navigate;
import React from 'react'
import { Route,Link, Routes } from 'react-router-dom';
import './Main.css'
import Twitter from './Twitter';
import About from './About';
import Home from './Home';

function Navigation() {
    
    return (
        <>
        <div className='banner'>
            <div className="navtab">
                <h2 id='logo'>ADA</h2>
                <Link to='/'>Home</Link>
                <Link to='/twitter'>Twitter</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
        <div className="content">
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/twitter' element={<Twitter/>}/>
                <Route path='/about' element={<About/>}/>
             </Routes>
        </div>
        </>
    )
}

export default Navigation

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li className='text-white font-medium text-lg'><Link to='/'>Home</Link></li>
        <li className='text-white font-medium text-lg'><a href='#projects'>Projects</a></li>
        <li className='text-white font-medium text-lg'><a href='#about'>About Me</a></li>
        <li className='text-white font-medium text-lg'><a href='#contact'>Contact Me</a></li>
        <li className='text-white font-medium text-lg'><Link to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-stone-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-700 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-white'>sSs</span></Link>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
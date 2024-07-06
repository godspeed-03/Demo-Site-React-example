import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../assets/me.jpg'
import './Header.scss'

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
};

  return (
<>
<div className={`header ${mobileMenu ? "mobileView" : ""}  mt-30 bg-sky-300 flex justify-between items-center py-5 md:px-28 px-5 `}>
  <div className=" text-3xl font-bold font-mono text-black">
    DEmOO
  </div>
  <nav>
 
        <ul className='flex gap-5 menuItems md:flex max-md:hidden'>
          <li className="menuItem">
            <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          </li>
          <li className="menuItem" >
            <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
          </li>
          <li className="menuItem">
            <Link to="/catelouge" onClick={() => setMobileMenu(false)}>catelouge</Link>
          </li >
          <li className="menuItem" >
            <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>
          </li>
          <li className="menuItem">
            <Link to="/blog" onClick={() => setMobileMenu(false)}>Blogs</Link>
          </li>
          
        </ul>
        <Outlet />
      </nav>
                      <div className="mobileMenuItems md:hidden  ">
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
</div>
 
      </>
  )
}

export default Header
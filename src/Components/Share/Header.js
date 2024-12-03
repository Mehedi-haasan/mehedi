import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Icon } from "@iconify/react";
import { useState } from "react";
import MehediCv from '../Image/Presentation.pdf'



const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  return (

    <div className="navbar bg-black">
      {<div className="h-full bg-black">
        <ul className={`md:flex absolute md:static transition-all ease-in duration-700 top-[75px] bg-[#22262A] md:bg-gray-100 md:hidden w-full p-3 left-0 space-x-4 ${open ? "left-0" : "left-[-750px]"}`}>
          <li><Link activeClass="active" to='home' onClick={toggleOpen} spy={true} smooth={true} duration={300} className="cursor-pointer text-white text-xl py-2 ml-4 font-bold">Home</Link></li>
          <li><Link activeClass="active" to='services' onClick={toggleOpen} spy={true} smooth={true} duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">Project</Link></li>
          <li><Link activeClass="active" to='about' onClick={toggleOpen} spy={true} smooth={true} duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">About</Link></li>
          <li><Link activeClass="active" to='contact' onClick={toggleOpen} spy={true} smooth={true} duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">Contact</Link></li>
        </ul>
      </div>}

      <div className="flex justify-between items-center px-5 lg:px-0 w-full md:w-[90%] lg:w-[75%] mx-auto">
        <div className="">
          <NavLink className='flex text-white font-bold text-4xl' onClick={() => { scroll.scrollToTop(); toggleOpen() }}>
            Mehedi hasan
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><Link activeClass="active" to='home' spy={true} smooth={true} duration={300} className="text-white text-xl py- font-bold" onClick={() => scroll.scrollToTop()}>Home</Link></li>
            <li><Link activeClass="active" to='services' spy={true} smooth={true} duration={300} className="text-white text-xl py-2 font-bold">Project</Link> </li>
            <li><Link activeClass="active" to='about' spy={true} smooth={true} duration={300} className="text-white text-xl py-2 font-bold">About</Link></li>
            <li><Link activeClass="active" to='contact' spy={true} smooth={true} duration={300} className="text-white text-xl py-2 font-bold">Contact</Link></li>
          </ul>
        </div>
        <div className="">
          <a href={MehediCv} download className="btn btn-outline btn-success font-bold">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Search } from 'lucide-react'
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='bg-black text-gray-200 flex justify-between items-center p-4 h-20 text-sm md:text[15px] font-medium text-nowrap'>
       
       <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          className="w-24 cursor-pointer brightness-125"
        />
      </Link>
      

        <ul className='hidden xl:flex space-x-6'>
            <li className='cursor-pointer hover:text-[#e50914]'>Home</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Tv Shows</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Movies</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Anime</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Games</li>
            <li className='cursor-pointer hover:text-[#e50914]'>New & Popular</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Upcoming</li>
        </ul>
        <div className='flex items-center space-x-4 relative'>
            <div className='relative hidden md:inline-flex'>
             <input type="text" placeholder='Search...' className='bg-[#333333] rounded-full min-w-72 pr-10 outline-none'/>
            <Search  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button className='bg-[#e50914] px-5 py-2 text-white cursor-pointer'>Get AI Movie Picks</button>
           <Link to={"/signin"}><button className='border border-[#333333] py-2 py-4 cursor-pointer' >Sign in</button></Link> 
        </div>
    </nav>
  )
}

export default Navbar
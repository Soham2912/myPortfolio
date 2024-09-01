import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa"
import Button from '@mui/material/Button';


function Navbar() {
  return (
    
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <a href="https://www.linkedin.com/in/sohamlahoti/"><FaLinkedin/></a>
            <a href="https://github.com/Soham2912"><FaGithub/></a>
            <a href="https://x.com/Soham__29"><FaSquareXTwitter/></a>  
            <FaInstagram/>
            <Button href='' alt='Resume' variant="outlined" color='#3700B3'>Resume</Button>
            </div>
       
    </nav>
    
  )
}

export default Navbar
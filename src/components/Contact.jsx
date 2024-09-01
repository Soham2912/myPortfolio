import React from 'react'
import { CONTACT } from '../constants'
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-10 text-center text-4xl'>Contact <span className='text-neutral-500'>Me</span>
        </motion.h1>
        <div className='text-center tracking-tighter '>
            <motion.p whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}}  transition={{duration:1}} className='my-4 '>{CONTACT.address}</motion.p>
            
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='my-4'><MdOutlinePhoneAndroid className='inline-block text-2xl mr-2'/> {CONTACT.phoneNo}</motion.p>
            {/* <MdEmail className='inline-block text-2xl mr-2'/> */}
            <motion.a whileInView={{opacity:1,y:0}} initial={{opacity:0,y:100}} transition={{duration:1.5}} href="#" className='underline'> <MdEmail className='inline-block text-2xl mr-2'/> {CONTACT.email}</motion.a>
        </div>
        </div>
  )
}

export default Contact
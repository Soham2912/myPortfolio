import React from 'react'
import { CONTACT } from '../constants'
import { MdEmail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Contact <span className='text-neutral-500'>Me</span>
        </h1>
        <div className='text-center tracking-tighter '>
            <p className='my-4 '>{CONTACT.address}</p>
            
            <p className='my-4'><MdOutlinePhoneAndroid className='inline-block text-2xl mr-2'/> {CONTACT.phoneNo}</p>
            <MdEmail className='inline-block text-2xl mr-2'/>
            <a href="#" className='underline'>{CONTACT.email}</a>
        </div>
        </div>
  )
}

export default Contact
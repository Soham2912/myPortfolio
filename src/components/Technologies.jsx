import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4 '>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavaLine className='text-7xl  text-blue-900'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-300 '/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Fill className='text-7xl text-orange-600'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                < RiCss3Fill className='text-7xl text-blue-700'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>  
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-7xl text-green-600'/>  
            </div>
        </div>
        </div>
  )
}

export default Technologies
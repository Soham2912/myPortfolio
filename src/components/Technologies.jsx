import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariate = (duration)=>({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease : "linear",
            repeat : Infinity,
            repeatType: "reverse",
        }
    }


})

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4 '>
            <motion.div variants={iconVariate(2.4)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>  
            </motion.div>
            <motion.div variants={iconVariate(2.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavaLine className='text-7xl  text-blue-900'/>  
            </motion.div>
            <motion.div variants={iconVariate(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptFill className='text-7xl text-yellow-300 '/>  
            </motion.div>
            <motion.div variants={iconVariate(1.9)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Fill className='text-7xl text-orange-600'/>  
            </motion.div>
            <motion.div variants={iconVariate(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                < RiCss3Fill className='text-7xl text-blue-700'/>  
            </motion.div>
            <motion.div variants={iconVariate(3.1)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>  
            </motion.div>
            <motion.div variants={iconVariate(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-7xl text-green-600'/>  
            </motion.div>
        </motion.div>
        </div>
  )
}

export default Technologies
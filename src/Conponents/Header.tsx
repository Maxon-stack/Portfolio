import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'



const Header = () => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
      initial={{
        x: -500, 
        opacity: 0,
        scale: 0.5 
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
        className='flex flex-row items-center'
      >
        <SocialIcon url="https://www.linkedin.com/in/maxon-corvil/"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://www.linkedin.com/in/maxon-corvil/"
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url="https://www.linkedin.com/in/maxon-corvil/"
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <div className='flex flex-row items-center'>
          <SocialIcon 
          network='email'
            fgColor='gray'
            bgColor='transparent'
          />
        </div>
        <p className='hidden md:inline-flex text-sm text-gray-400'>
          Maxon Corvil
        </p>
      </motion.div>
    </header>
  )
}

export default Header
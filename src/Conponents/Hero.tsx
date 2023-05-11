import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCirlces'
import Image from 'next/image'
//import Profile from '@/profile.jpg';
import Link from 'next/link';



const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hello, I\'m Maxon Corvil',
      'I\'m a Full Stack Developer',
      'I\'m a Software Engineer',
      'I\'m a Web Developer',
      'I\'m a Software Developer',
      'I\'m a Frontend Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='rounded-full mx-auto object-cover h-32 w-32'
        src='Portfolio/profile.jpg'
        alt='Profile'
      />
      <div className='z-20'> 
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>

      <h1 className='text-5xl lg:text-6xl font-semibold px-10 '>
        <span className='mr-3'>
          {text}
          <Cursor cursorColor='#F7AB0A' />
        </span>
      </h1>
      <div className='pt-5 '>
        <Link href='#about'>
          <button className='heroButton'>
            About Me
          </button>
        </Link>
        <Link href='#about'>
          <button className='heroButton'>
            Expreience
          </button>
        </Link>
        <Link href='#about'>
          <button  className='heroButton'>
            Education
          </button>
        </Link >
        <Link href='#about'>
          <button className='heroButton'>
            Skills
          </button>
        </Link>
        <Link href='#about'>
          <button className='heroButton'>
            Portfolio
          </button>
        </Link>
        </div>



      </div>

    </div>
  )
}

export default Hero
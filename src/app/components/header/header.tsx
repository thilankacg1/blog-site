import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href="/">
            <Image src="/assets/myBlog.png"
            width={150} height={50} className="w-44 object-contain cursor-pointer" alt="" ></Image>
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
        <h3>About</h3>
        <h3>Contact</h3>
        <h3 className='text-white bg-orange-500 px-4 py-1 rounded-full'>Follow</h3>
      </div>
      </div>
      <div className='flex items-center space-x-5 border-orange-500'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full border-orange-500'>Get Started</h3>
      </div>
      
    </header>
  )
}

export default Header;

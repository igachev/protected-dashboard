import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <>
    <nav className="bg-blue-700 py-4 px-6 flex items-center justify-center mb-5">
        <div className="text-white">
            <Link href="sign-in" className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
            <Link href="sign-up" className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
        </div>
    </nav>
    </>
  )
}

export default Header
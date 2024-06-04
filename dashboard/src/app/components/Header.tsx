import Link from 'next/link'
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {

  const { userId } : { userId: string | null } = auth();

  return (
    <>
    <nav className="bg-blue-700 py-4 px-6 flex items-center justify-center mb-5">
        <div className="text-white">

          {!userId && (
            <>
            <Link href="sign-in" className='text-gray-300 hover:text-white mr-4'>Sign In</Link>
            <Link href="sign-up" className='text-gray-300 hover:text-white mr-4'>Sign Up</Link>
            </>
          )}

          {userId && (
            <UserButton afterSignOutUrl='/' />
          )}
            
        </div>
    </nav>
    </>
  )
}

export default Header
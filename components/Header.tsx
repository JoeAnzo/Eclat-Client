'use client'
import {SignInButton,SignOutButton,UserButton,Show,useAuth} from "@clerk/nextjs"
import Link from 'next/link' 
import {ShoppingBag,Menu,X,UserRound} from 'lucide-react'
import {LuUserRoundCheck} from 'react-icons/lu'
import {useState} from 'react'

const Header = () => {

  const [openMenu,setCloseMenu] = useState(false)

  const {sessionId} = useAuth()
  const handleClick = () => {
    console.log('clicked')
    setCloseMenu((prev) => !prev)
  }

  return (
    <header className={`fixed z-10 top-0 left-0 right-0 flex justify-between items-center bg-white/30 backdrop-blur-xl backdrop-filter py-4 px-2 border border-(--secondary-color)`}>
          <div className="sm:hidden" onClick={handleClick}>
            {openMenu ? <X/>:<Menu/>}
          </div>
        <Link href="/">
          <h1 className="text-xl font-bold font-playfair text-(--primary-color)">Eclat Essence</h1>
        </Link>
          <nav className={`sm:space-x-2 py-2 pl-2 right-0 space-y-2 flex-col sm:flex-row font-sans absolute sm:relative top-full left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${openMenu ? 'flex opacity-100 translate-y-0 bg-background border border-(--secondary-color)' : 'hidden sm:flex -translate-y-[200px] sm:translate-y-0'}`}>
              <Link className="border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--primary-color)" href="/">Home</Link>
              <Link className="border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--primary-color)" href="/shop">Shop</Link>
              <Link className="border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--primary-color)" href="/#how-it-works">How it works</Link>
              <Link className="border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--primary-color)" href="/about-us">About</Link>
              <Link className="text-(--text) py-2 sm:border-none hover:text-(--primary-color)" href="/#contact">Contact</Link>
              {
                sessionId ? <SignOutButton><button className="bg-(--primary-color) py-2 text-white rounded-md">Sign Out</button></SignOutButton> : <SignInButton mode="modal"><button className="bg-(--primary-color) py-2 text-white rounded-md">Sign In</button></SignInButton>
              }
          </nav>
        <div className='flex gap-2'>
          <div className="flex gap-2">
            <Show when="signed-in">
              <button>
                <LuUserRoundCheck size={24}/>
              </button>
            </Show>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button>
                  <UserRound size={24}/>
                </button>
              </SignInButton>
            </Show>
            <Link href="/cart">
              <ShoppingBag/>
            </Link>
          </div>
        </div>
    </header>

  )
}

export default Header

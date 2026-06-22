'use client'
import {SignInButton,SignOutButton,UserButton,Show,useAuth} from "@clerk/nextjs"
import Link from 'next/link' 
import {ShoppingBag,Menu,X,UserRound} from 'lucide-react'
import {useState,useEffect} from 'react'
import Animation from "./Animation"

const Header = () => {
  const [openMenu,setCloseMenu] = useState(false)
  const [hasScrolled,setHasScrolled] = useState(false)
  const {sessionId} = useAuth()
  const handleClick = () => {
    console.log('clicked')
    setCloseMenu((prev) => !prev)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50){
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }

  },[])
  return (
    <header className={`fixed z-10 top-0 left-0 right-0 flex justify-between items-center ${hasScrolled ? 'bg-white/30 backdrop-blur-xl backdrop-filter':'bg-transparent'} py-4 px-2 border border-(--secondary-color)`}>
        <Link href="/">
          <h1 className="text-xl font-bold font-playfair text-(--primary-color)">Eclat Essence</h1>
        </Link>

   
   
          <nav className={`sm:space-x-2 py-2 pl-2 right-0 space-y-2 ${ openMenu ? 'flex bg-background border border-(--secondary-color) sm:border-none translate-y-0 duration-500 ease-in-out sm:bg-transparent':'hidden -translate-y-[200px] sm:flex'} flex-col sm:flex-row font-sans absolute sm:relative top-full left-0 z-500`}>
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
                <UserButton/>
              </button>
            </Show>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button>
                  <UserRound/>
                </button>
              </SignInButton>
            </Show>
            <Link href="/cart">
              <ShoppingBag/>
            </Link>
          </div>
          <div className="sm:hidden" onClick={handleClick}>
            {openMenu ? <X/>:<Menu/>}
          </div>
        </div>
    </header>

  )
}

export default Header

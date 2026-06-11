'use client'
import {Show, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs"
import Link from 'next/link' 
import {ShoppingBag,Menu,X,UserRound} from 'lucide-react'
import {useState,useEffect} from 'react'
const Header = () => {
  const [openMenu,setCloseMenu] = useState(false)
  const [hasScrolled,setHasScrolled] = useState(false)
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
    <header className={`fixed z-10 top-0 left-0 right-0 flex justify-between items-center ${hasScrolled ? 'bg-white/30 backdrop-blur-xl backdrop-filter border-(--primary-color)':'bg-transparent'} py-4 px-2`}>
        <h1 className="text-xl font-bold font-playfair text-[#4A2C6D]">Eclat Essence</h1>
        <nav className={`sm:space-x-2 py-2 pl-2 right-0 space-y-2 ${ openMenu ? 'flex bg-background sm:bg-transparent':'hidden sm:flex'} flex-col sm:flex-row font-sans absolute sm:relative top-full left-0 z-500`}>
            <Link className="border-b border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/">Home</Link>
            <Link className="border-b border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/shop">Shop</Link>
            <Link className="border-b border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/how-it-works">How it works</Link>
            <Link className="border-b border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/about-us">About</Link>
            <Link className="border-b border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/contact-us">Contact</Link>
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
        </nav>
        <div className='flex gap-2'>
          <div className="flex gap-2">
            <UserRound className={`${hasScrolled ? '':''}`}/>
            <ShoppingBag className={`${hasScrolled ? '':''}`}/>
          </div>
          <div className="sm:hidden" onClick={handleClick}>
            {openMenu ? <X className={`${hasScrolled ? '':''}`}/>:<Menu className={`${hasScrolled ? '':''}`}/>}
          </div>
        </div>
    </header>

  )
}

export default Header

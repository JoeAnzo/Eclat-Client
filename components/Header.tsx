'use client'
import {SignOutButton,SignInButton,Show,useAuth} from "@clerk/nextjs"
import Link from 'next/link' 
import {ShoppingBag,Menu,X,UserRound,ChevronDown,ChevronRight,Play,BookOpenText,Headset,House} from 'lucide-react'
import {LuUserRoundCheck} from 'react-icons/lu'
import {GiDelicatePerfume} from 'react-icons/gi'
import {useState,useEffect,useRef} from 'react'

const Header = () => {

  const [openMenu,setCloseMenu] = useState(false)
  const dropdownRef = useRef<HTMLElement>(null)

  const {sessionId} = useAuth()
  const handleClick = () => {
    console.log('clicked')
    setCloseMenu((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutSide = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCloseMenu(false)
      }
    }

    document.addEventListener('mousedown',handleClickOutSide)

    return () => document.removeEventListener('mousedown',handleClickOutSide)
  },[])

  return (
    <header className={`fixed z-10 top-0 left-0 right-0 flex justify-between items-center bg-white/30 backdrop-blur-xl backdrop-filter py-4 px-2`}>
          <div className="md:hidden" onClick={handleClick}>
            {openMenu ? <X/>:<Menu/>}
          </div>
        <Link href="/">
          <h1 className="text-xl font-bold font-playfair text-(--primary-color) whitespace-nowrap">Eclat Essence</h1>
        </Link>
          <nav ref={dropdownRef} className={`sm:space-x-4 py-2 pl-2 right-0 space-y-2 flex-col sm:flex-row font-sans absolute sm:relative sm:hidden md:flex top-full left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${openMenu ? 'flex opacity-100 translate-y-0 bg-background border border-(--secondary-color)' : 'hidden sm:flex -translate-y-50 justify-center items-center sm:translate-y-0'}`}>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/"><House/>Home</Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/shop"><ShoppingBag/>Shop</Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/#how-it-works"><Play/>How it works</Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/about-us"><BookOpenText/>Our Story</Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/about-us"><GiDelicatePerfume size={24}/>Our Fragrance Collection <ChevronRight className="text-(--text) sm:hidden"/><ChevronDown className="text-(--text) hidden sm:inline"/></Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 border-b text-(--text) border-gray-300 py-2 sm:border-none hover:text-(--secondary-color)" href="/my-account"><UserRound/>My Account <ChevronRight className="text-(--text) sm:hidden"/><ChevronDown className="text-(--text) hidden sm:inline"/></Link>
              <Link onClick={() => setCloseMenu(false)} className="flex gap-2 text-(--text) py-2 sm:border-none hover:text-(--primary-color)" href="/#contact"><Headset/>Contact Us</Link>
              
              {
                sessionId ? <SignOutButton><button onClick={() => setCloseMenu(false)} className="bg-(--primary-color) px-4 py-2 text-white rounded-md sm:px-5 sm:py-2.5">Sign Out</button></SignOutButton> : <Link href="/login"><SignInButton><button onClick={() => setCloseMenu(false)} className="bg-(--primary-color) px-4 py-2 text-white rounded-md sm:px-5 sm:py-2.5 self-stretch">Sign In</button></SignInButton></Link>
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
              <Link href="/login">
                <button>
                  <UserRound size={24}/>
                </button>
              </Link>
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

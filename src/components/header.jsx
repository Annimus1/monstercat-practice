import { useState } from 'react'
import Social from './Social';
import SideMenuContent from './SideMenuContent';


function Header() {

  const [ isShowed, setIsShowed ] = useState(false);

  const handleShow = () => {
    setIsShowed(!isShowed)
  }

  return (
    <header className="h-14 px-5 py-2 bg-black opacity-100 backdrop-blur-sm relative lg:bg-transparent">
      <nav className="min-w-screen flex justify-between items-center">
        {/* Logo */}
        <a id="logo" href="https://www.monstercat.com/">
          <img className="w-[40px] h-[40px]" 
          src="https://cdn.monstercat.com/monstercat-logo.webp" 
          alt="Monstercat Logo" title="Monstercat" 
          width="50" height="50" />
        </a>

        {/* Social */}
        <div className='hidden sm:block lg:hidden'>
            <Social display='flex'/>
        </div>

        {/* Menu button */}
        <div className="text-white">
            <svg className="hover:cursor-pointer" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`${isShowed ? 'translate-x-0':'-translate-x-[-500px]'} 
        max-w-[420px] w-full h-screen flex flex-col absolute right-0 top-0 transition-transform ease-outs duration-700 bg-[#000] p-6 text-white
        z-50`}>
          {/* Header */}
          <header className="flex justify-between items-end mb-6">
          <img src="https://cdn.monstercat.com/monstercat-logo-white.svg" alt="Monstercat Logo" width="180" />
            <svg className="hover:cursor-pointer" onClick={handleShow}
              fill='#fff' xmlns="http://www.w3.org/2000/svg" width="35" height="35" 
              viewBox="0 0 24 24">
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
            </svg>
          </header>

          {/* Side bar Content */}
          <SideMenuContent />

          {/* Social */}
          <Social display='flex' />

          {/* Session */}
          <div className="mb-4 mt-8">
            <a href="#" className="text-md font-bold border py-1 px-2 mr-2 transition-all hover:bg-white hover:text-black">SIGN IN</a>
            <span className="text-md font-bold mr-2">OR</span>
            <a href="#" className="text-md font-bold">SIGN UP</a>
          </div>
      </div>

      {/* Social lg screen */}
      <div className="hidden lg:block lg:absolute lg:top-[90px] lg:right-6">
      <Social display='flex-col'/>
      </div>

    </header>
  )
}

export default Header

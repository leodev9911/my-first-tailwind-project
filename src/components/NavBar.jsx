import logoImage from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import '../index.css'

export default function NavBar () {
  return (
    <div className='w-full px-7 py-8 z-10 bg-white'>
      <nav className='flex grow justify-between items-center w-full max-w-7xl mx-auto my-0 md:py-4'>
        <img 
          src={logoImage} 
          alt='Logo image' 
        />
        <img 
          src={hamburgerIcon} 
          alt='Icon hamburger'
          className='md:hidden' 
        />
        <div className='hidden md:flex items-center gap-6 text-xs'>
          <a href='#'>HOW WE WORK</a>
          <a href='#'>BLOG</a>
          
          <a href='#'>ACCOUNT</a>
          <a 
            href='#'
            className='py-2.5 px-6 border-2 border-solid border-violet text-violet font-bold hover:text-white hover:bg-violet duration-300'
          >
            VIEW PLANS
          </a>
        </div>
      </nav>
    </div>
  )
}
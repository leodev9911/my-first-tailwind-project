import logoImage from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import '../index.css'

export default function NavBar ({ mobileMenuIsActive, setMobileMenuIsActive }) {
  return (
    <div className='w-full px-7 z-10 bg-white'>
      <nav className='flex grow justify-between items-center w-full max-w-7xl mx-auto my-0 py-4'>
        <img 
          src={logoImage} 
          alt='Logo image' 
        />
        {!mobileMenuIsActive 
          ? <img 
              src={hamburgerIcon} 
              alt='Icon hamburger'
              className='md:hidden cursor-pointer'
              onClick={() => setMobileMenuIsActive(true)} 
            />
          : <img 
              src={closeIcon} 
              alt='Close icon'
              className='md:hidden cursor-pointer'
              onClick={() => setMobileMenuIsActive()} 
            />
        }
       
        <div className='hidden md:flex items-center gap-6 text-xs'>
          <a href='#' className='font-bold duration-300 text-darkGrayishViolet hover:text-darkViolet'>HOW WE WORK</a>
          <a href='#' className='font-bold duration-300 text-darkGrayishViolet hover:text-darkViolet'>BLOG</a>
          
          <a href='#' className='font-bold duration-300 text-darkGrayishViolet hover:text-darkViolet'>ACCOUNT</a>
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
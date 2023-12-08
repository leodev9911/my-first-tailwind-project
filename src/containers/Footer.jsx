import footerPatternMobile from '../assets/images/bg-pattern-footer-mobile.svg'
import footerPatternDesktop from '../assets/images/bg-pattern-footer-desktop.svg'

export default function Footer ({ children }) {
  return (
    <footer className='relative bg-veryLightGray py-20 px-6'>
      <img 
        src={footerPatternMobile} 
        alt='Pattern mobile'
        className='absolute top-0 left-0 sm:hidden' 
      />
      <img 
        src={footerPatternDesktop} 
        alt='Pattern mobile'
        className='hidden sm:block absolute top-0 left-0' 
      />
      {children}
    </footer>
  )
}

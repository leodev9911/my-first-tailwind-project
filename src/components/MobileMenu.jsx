import menuMobilePattern from '../assets/images/bg-pattern-mobile-nav.svg'

export default function MobileMenu () {
  return (
    <section className='absolute flex flex-col text-center items-center gap-6 top-0 w-full h-screen bg-darkViolet px-6 py-8'>
      <a className='text-white cursor-pointer hover:text-darkGrayishViolet duration-300'>HOW WE WORK</a>
      <a className='text-white cursor-pointer hover:text-darkGrayishViolet duration-300'>BLOG</a>
      <a className='text-white cursor-pointer hover:text-darkGrayishViolet duration-300'>ACCOUNT</a>
      <a
        href='#'
        className='w-full py-2.5 px-6 border-2 border-solid border-white text-white font-bold hover:text-darkGrayishViolet hover:bg-veryLightGray duration-300 text-center'
      >
        VIEW PLANS
      </a>
      <img 
        src={menuMobilePattern} 
        alt='Menu mobile pattern'
        className='absolute bottom-0 right-0' 
      />
    </section>
  )
}

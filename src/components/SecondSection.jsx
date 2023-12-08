import howWeWorkPatternMobile from '../assets/images/bg-pattern-how-we-work-mobile.svg'
import howWeWorkPatternDesktop from '../assets/images/bg-pattern-how-we-work-desktop.svg'

export default function SecondSection () {
  return (
    <section className='relative max-w-7xl my-0 mx-auto flex flex-col items-center gap-8 bg-darkViolet py-20 px-5 mt-32 text-center text-white lg:flex-row lg:justify-between lg:px-20 lg:text-start'>
        <img 
          src={howWeWorkPatternMobile} 
          alt='Second section pattern'
          className='md:hidden absolute top-0 right-0' 
        />
        <img 
          src={howWeWorkPatternDesktop} 
          alt='Second section pattern'
          className='hidden md:block absolute top-0 right-0' 
        />
      <h2 className='font-serifDisplay text-4xl max-w-lg lg:text-5xl'>Find out more about how we work</h2>
      <a 
        href='#'
        className='py-2.5 px-6 border-2 border-solid border-white text-white font-bold hover:text-darkGrayishViolet hover:bg-veryLightGray duration-300 max-w-[150px] text-center z-10'
      >
        VIEW PLANS
      </a>
    </section>
  )
}

import introMobile from '../assets/images/image-intro-mobile.jpg'
import introDesktop from '../assets/images/image-intro-desktop.jpg'
import patternIntroLeftMobile from '../assets/images/bg-pattern-intro-left-mobile.svg'
import patternIntroRightMobile from '../assets/images/bg-pattern-intro-right-mobile.svg'
import patternIntroLeftDesktop from '../assets/images/bg-pattern-intro-left-desktop.svg'
import patternIntroRightDesktop from '../assets/images/bg-pattern-intro-right-desktop.svg'

export default function HeaderSection ({ children }) {
  return (
    <section className='relative bg-darkViolet w-full md:px-6 md:py-10 lg:py-32'>
      <img 
        src={introMobile} 
        alt='A family picture'
        className='md:hidden w-full' 
      />
      <img 
        src={patternIntroLeftDesktop} 
        alt='Pattern intro desktop'
        className='hidden md:block absolute bottom-[-310px] left-0' 
     />
      <img 
        src={patternIntroRightDesktop} 
        alt='Pattern intro desktop'
        className='hidden md:block absolute top-[-80px] right-0' 
     />
      <div className='relative w-full py-20 px-6 max-w-7xl my-0 mx-auto flex flex-col items-center gap-6 md:px-0 md:py-0 text-center md:text-start md:items-start'>
        <span className='hidden md:inline-block mb-10 border-t-2 border-veryLightGray w-36' />
        <div className='max-w-xs lg:max-w-xl'>
          <h1 className='text-white text-5xl font-serifDisplay mb-5'>Humanizing your insurance.</h1>
          <p className='text-lg text-darkGrayishViolet'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that is right for you. Ensure you and your loved ones are protected.</p>
        </div>
        <img 
          src={introDesktop} 
          alt='A family picture' 
          className='hidden md:block absolute z-10 h-[500px] w-96 top-0 right-0'
        />
        <img 
          src={patternIntroLeftMobile} 
          alt='Pattern intro mobile'
          className='absolute top-0 left-0 md:hidden' 
        />
        <img 
          src={patternIntroRightMobile} 
          alt='Pattern intro mobile' 
          className='absolute -bottom-40 right-0 md:hidden'
        />
        <a 
          href='#'
          className='py-2.5 px-6 border-2 border-solid border-darkGrayishViolet text-darkGrayishViolet font-bold hover:text-darkGrayishViolet hover:bg-veryLightGray duration-300 max-w-[150px] text-center'
        >
          VIEW PLANS
        </a>
      </div>
      {children}
    </section>
  )
}
import logoImage from '../assets/images/logo.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
import facebookIcon from '../assets/images/icon-facebook.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'

export default function FooterSocialSection () {
  return (
    <section className='max-w-7xl flex flex-col sm:flex-row sm:justify-between items-center gap-5 my-0 mx-auto pb-7 border-b-2 border-darkGrayishViolet'>
      <img 
        src={logoImage} 
        alt='Logo image'
        className='w-[112px] h-[18px]' 
      />
      <div className='flex gap-4'>
        <img 
          src={facebookIcon} 
          alt='Logo image' 
        />
        <img 
          src={twitterIcon} 
          alt='Logo image' 
        />
        <img 
          src={pinterestIcon} 
          alt='Logo image' 
        />
        <img 
          src={instagramIcon} 
          alt='Logo image' 
        />
      </div>
    </section>
  )
}
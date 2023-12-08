export default function FooterLinksSection () {
  return (
    <section className='max-w-7xl mx-auto my-0 flex flex-wrap gap-6 justify-center text-center items-center pt-7 lg:justify-between lg:text-start'>
      <div className='w-[200px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>OUR COMPANY</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a className='cursor-pointer duration-300 hover:underline'>HOW WE WORK</a>
          <a className='cursor-pointer duration-300 hover:underline'>WHY INSURE?</a>
          <a className='cursor-pointer duration-300 hover:underline'>CHECK PRICE</a>
          <a className='cursor-pointer duration-300 hover:underline'>REVIEWS</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>HELP ME</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a className='cursor-pointer duration-300 hover:underline'>FAQ</a>
          <a className='cursor-pointer duration-300 hover:underline'>TERMS OF USE</a>
          <a className='cursor-pointer duration-300 hover:underline'>PRIVACY POLICY</a>
          <a className='cursor-pointer duration-300 hover:underline'>COOKIES</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>CONTACT</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a className='cursor-pointer duration-300 hover:underline'>SALES</a>
          <a className='cursor-pointer duration-300 hover:underline'>SUPPORT</a>
          <a className='cursor-pointer duration-300 hover:underline'>LIVE CHAT</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>OTHERS</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a className='cursor-pointer duration-300 hover:underline'>CAREERS</a>
          <a className='cursor-pointer duration-300 hover:underline'>PRESS</a>
          <a className='cursor-pointer duration-300 hover:underline'>LICENSES</a>
        </div>
      </div>
    </section>
  )
}

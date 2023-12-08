export default function FooterLinksSection () {
  return (
    <section className='max-w-7xl mx-auto my-0 flex flex-wrap gap-6 justify-center text-center items-center pt-7 lg:justify-between lg:text-start'>
      <div className='w-[200px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>OUR COMPANY</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a>HOW WE WORK</a>
          <a>WHY INSURE?</a>
          <a>CHECK PRICE</a>
          <a>REVIEWS</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>HELP ME</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a>FAQ</a>
          <a>TERMS OF USE</a>
          <a>PRIVACY POLICY</a>
          <a>COOKIES</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>CONTACT</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a>SALES</a>
          <a>SUPPORT</a>
          <a>LIVE CHAT</a>
        </div>
      </div>
      <div className='w-[220px]'>
        <h3 className='mb-6 text-xl text-darkGrayishViolet'>OTHERS</h3>
        <div className='flex flex-col gap-2 text-darkViolet font-bold text-lg'>
          <a>CAREERS</a>
          <a>PRESS</a>
          <a>LICENSES</a>
        </div>
      </div>
    </section>
  )
}

import thunderIcon from '../assets/images/icon-snappy-process.svg'
import peopleFirstIcon from '../assets/images/icon-people-first.svg'
import affordablePricesIcon from '../assets/images/icon-affordable-prices.svg'

export default function FirstSection () {
  return (
    <section className='text-center xl:text-start'>
      <span className='inline-block w-[50%] border-t-2 max-w-[140px] border-darkGrayishViolet mb-10' />
      <h2 className='text-5xl mb-24 font-serifDisplay'>We're different</h2>
      <div className='flex flex-col items-center gap-16 md:flex-row'>
        <article className='flex items-center flex-col gap-5 xl:items-start'>
          <img src={thunderIcon} alt='Thunder icon' />
          <h3 className='font-serifDisplay text-3xl'>Snappy Process</h3>
          <p className='text-gray-400'>Our application process can be completed in minutes, not hours. Do not get stuck filling in tedious forms.</p>
        </article>
        <article className='flex items-center flex-col gap-5 xl:items-start'>
          <img src={affordablePricesIcon} alt='Thunder icon' />
          <h3 className='font-serifDisplay text-3xl'>Affordable Prices</h3>
          <p className='text-gray-400'>We do not want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
        </article>
        <article className='flex items-center flex-col gap-5 xl:items-start'>
          <img src={peopleFirstIcon} alt='Thunder icon' />
          <h3 className='font-serifDisplay text-3xl'>People First</h3>
          <p className='text-gray-400'>Our plans are not full of conditions and clauses to prevent payouts. We make sure you are covered when you need it</p>
        </article>
      </div>
    </section>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Rating from '@/components/rating'

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-veryDarkBlue text-white">
        <div className="flex flex-col space-y-4 bg-gradient-to-b from-darkBlueTop to-darkBlueBottom p-4 m-4 rounded-xl md:w-1/3">
          <div>
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-darkBlue p-4">
              <Image
                alt='star'
                src='/images/icon-star.svg'
                width={16}
                height={16}
                className='text-orange'
              />
            </button>
          </div>
          <h1 className="text-2xl font-bold">How did we do?</h1>
          <p className="text-lightGrey">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <Rating></Rating>
          <button className='bg-orange rounded-full py-3 tracking-widest hover:bg-white hover:text-orange'><span className="uppercase font-bold">Submit</span></button>
          {/* <!-- Rating state end --> */}
          {/* <!-- Thank you state start --> */}
          {/* You selected <!-- Add rating here --> out of 5 */}
          {/* Thank you!
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch! */}
          {/* <!-- Thank you state end --> */}
        </div>
      </div>

    </>
  )
}

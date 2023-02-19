import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Rating from '@/components/rating'
import { useState } from 'react'

export default function Home() {
  const [rating,setRating] = useState<number>(0)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const rateHandler = (rating:number) => {
    setRating(rating)
  }

  const onSubmitHandler = () => {
    setSubmitted(!submitted)
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-veryDarkBlue text-white">
        <div className={`flex flex-col space-y-4 bg-gradient-to-b from-darkBlueTop to-darkBlueBottom p-4 m-4 rounded-xl md:w-1/3 ${submitted ? 'hidden' : ''}`}>
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
            <Rating rating={rating} updateRateHandler={rateHandler} ></Rating>
            <button className='bg-orange rounded-full py-3 tracking-widest hover:bg-white hover:text-orange' onClick={onSubmitHandler}><span className="uppercase font-bold">Submit</span></button>
        </div>
        {/* <!-- Rating state end --> */}
        {/* <!-- Thank you state start --> */}
        <div className={`flex flex-col items-center space-y-6 bg-gradient-to-b from-darkBlueTop to-darkBlueBottom p-8 m-4 rounded-xl md:w-1/3  ${submitted ? '' : 'hidden'}`}>
          <Image
            alt='illustration thank you'
            src='/images/illustration-thank-you.svg'
            width={162}
            height={108}
            className='text-orange'
          />
            <span className="text-center text-orange rounded-full bg-darkBlue px-5 py-2">You selected {rating} out of 5</span>
            <h1 className="text-3xl text-white">Thank you!</h1>
            <p className="text-lightGrey text-center">
              We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!
            </p>
        </div>
        {/* <!-- Thank you state end --> */}
      </div>

    </>
  )
}

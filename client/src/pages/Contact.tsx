import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <>
        <div className="first-container relative">
          <div className='sm:h-[70vh] sm:w-svw bg-cover' style={{ backgroundImage: `url("/images/gene_bg_0.jpg")` }} />
          <div className='overlay absolute w-full h-full top-0 left-0 bg-black/[0.5]'/>
          <div className='font-semibold sm:text-5xl text-white absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2'>Contact Us</div>
        </div>
        <NavBar />
        <div className="second-container grid grid-cols-3 py-16 px-20">
          <div className="info col-span-1 sm:space-y-8">
            <div className="item flex sm:space-x-4">
              <div className='sm:w-[44px] sm:h-[44px] rounded-full bg-[#00204A] text-white sm:text-xl flex justify-center items-center'>
                <Icon icon="material-symbols:location-on-rounded" />
              </div>
              <div className='sm:space-y-2'>
                <div className='text-lg text-[#00204A] font-semibold'>Location:</div>
                <div className='text-[#aaa] text-[15px]'>Texas Tech University, TX</div>
              </div>
            </div>
            <div className="item flex sm:space-x-4">
              <div className='sm:w-[44px] sm:h-[44px] rounded-full bg-[#00204A] text-white sm:text-xl flex justify-center items-center'>
                <Icon icon="mdi:clock-time-nine-outline" />
              </div>
              <div className='sm:space-y-2'>
                <div className='text-lg text-[#00204A] font-semibold'>Open Hours:</div>
                <div>
                  <div className='text-[#aaa] text-[15px]'>Sunday - Friday:</div>
                  <div className='text-[#aaa] text-[15px]'>11:00 AM - 11:00 PM</div>
                </div>
              </div>
            </div>
            <div className="item flex sm:space-x-4">
              <div className='sm:w-[44px] sm:h-[44px] rounded-full bg-[#00204A] text-white sm:text-xl flex justify-center items-center'>
                <Icon icon="material-symbols:mail-rounded" />
              </div>
              <div className='sm:space-y-2'>
                <div className='text-lg text-[#00204A] font-semibold'>Email:</div>
                <div className='text-[#aaa] text-[15px]'>tetyana.vasylyeva@ttuhsc.edu</div>
              </div>
            </div>
            <div className="item flex sm:space-x-4">
              <div className='sm:w-[44px] sm:h-[44px] rounded-full bg-[#00204A] text-white sm:text-xl flex justify-center items-center'>
                <Icon icon="ic:baseline-call" />
              </div>
              <div className='sm:space-y-2'>
                <div className='text-lg text-[#00204A] font-semibold'>Call:</div>
                <div className='text-[#aaa] text-[15px]'>+1(210)-355-4056</div>
              </div>
            </div>
          </div>
          <div className="input-fields col-span-2 flex flex-col sm:px-6 sm:gap-6">
            <div className='flex sm:gap-4'>
              <input type="text" placeholder='Your Name' className='border border-solid border-[#ccc] sm:px-4 sm:py-6 rounded-md sm:h-[52px] focus:border-[#8090a5] transition delay-75 box-border sm:w-1/2'/>
              <input type="text" placeholder='Your Email' className='border border-solid border-[#ccc] sm:px-4 sm:py-6 rounded-md sm:h-[52px] focus:border-[#8090a5] transition delay-75 box-border sm:w-1/2'/>
            </div>
            <input placeholder='Subject' type="text" className='border border-solid border-[#ccc] sm:px-4 sm:py-6 rounded-md sm:h-[52px] focus:border-[#8090a5] transition delay-75'/>
            <textarea placeholder='Message' className='border border-solid border-[#ccc] sm:px-4 sm:py-3 rounded-md focus:border-[#8090a5] transition delay-75' name="" id="" rows={7}></textarea>
            <button className='sm:w-48 sm:h-[52px] rounded-full text-center text-lg text-white bg-[#005555] transition delay-150 hover:-translate-y-1'>Send Message</button>
          </div>
        </div>
    </>
  )
}

export default Contact
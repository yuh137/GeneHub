import React, { useState } from 'react'
import { Breadcrumb, Modal } from 'antd'
import { Link } from 'react-router-dom'
import FacebookSVG from '../assets/FacebookSVG';
import GoogleSVG from '../assets/GoogleSVG';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import LinkedInSVG from '../assets/LinkedInSVG';

const NavBar = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className='sm:w-[85svw] sm:h-20 bg-[#005555] rounded-md flex justify-between items-center absolute left-1/2 -translate-x-1/2 top-4 sm:px-8 w-[90svw] h-16 px-4'>
        <div className='text-[#ccc] font-semibold hover:text-white hover:cursor-pointer transition duration-100 sm:text-2xl justify-self-start self-center'>GeneHubAI</div>
        
        {/* Navigation Bar */}
        <Breadcrumb 
          className='justify-self-end self-center *:sm:space-x-8 sm:block hidden'
          separator=''
          items={[
            {
              title: <div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75 flex items-center sm:gap-x-1' onClick={() => navigate(-1)}>
                <Icon className='sm:w-[24px] sm:h-[24px]' icon="material-symbols:arrow-left-alt-rounded" />
                <div>Previous page</div>
              </div>
            },
            {
              title: <Link to='/'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Home</div></Link>
            },
            {
              title: <Link to='/contacts'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Contact Us</div></Link>
            },
            {
              title: <div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75' onClick={() => setIsRegisterModalOpen(true)}>Register</div>
            },
            {
              title: <div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75' onClick={() => setIsLoginModalOpen(true)}>Login</div>
            },
          ]}
        />
        
        {/* Register Modal */}
        <Modal
          open={isRegisterModalOpen}
          onCancel={() => setIsRegisterModalOpen(false)}
          onOk={() => setIsRegisterModalOpen(false)}
          footer={<></>}
          className='sm:!w-[60svw]'
        >
          <div className='relative grid grid-cols-10'>
            <div className='bg-[#012433] col-span-4 sm:h-[70svh] rounded-s-lg flex flex-col justify-center sm:gap-y-4 sm:px-8'>
              <div className='text-white sm:text-3xl font-semibold'>Welcome to GeneHubAI</div>
              <div className='divider sm:h-[4px] sm:w-[50%] rounded-full bg-[#005555]' />
              <div className='text-white sm:text-lg font-semibold'>Create a new account and start your journey</div>
            </div>
            <div className='col-span-6 sm:h-[70svh] sm:px-12 sm:py-16 flex flex-col items-center sm:gap-y-4'>
              <input type="text" className='sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100' placeholder='Email Address'/>
              <input type="text" className='sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100' placeholder='Username'/>
              <input type="password" className='sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100' placeholder='Password'/>
              <div className='flex sm:w-2/3 sm:gap-x-2'>
                <div className='sm:w-[45%] sm:h-[1px] bg-black self-center' />
                <div>Or</div>
                <div className='sm:w-[45%] sm:h-[1px] bg-black self-center' />
              </div>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#005555] transition delay-100'>
                <div className='sm:col-span-1'><FacebookSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with Facebook</div>
              </button>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100'>
                <div className='sm:col-span-1'><GoogleSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with Google</div>
              </button>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100'>
                <div className='sm:col-span-1'><LinkedInSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with LinkedIn</div>
              </button>
              <button className='sm:w-2/3 sm:h-[48px] bg-[#005555] text-white sm:text-xl font-semibold rounded-xl hover:-translate-y-1 transition duration-100'>Sign up</button>
              <div className='flex sm:gap-x-1'>
                <div className='sm:text-lg'>Already have an account?</div>
                <div className='sm:text-lg text-blue-500 font-semibold hover:cursor-pointer hover:underline'>Login</div>
              </div>
            </div>
          </div>
        </Modal>

        {/* Login Modal */}
        <Modal
          open={isLoginModalOpen}
          onCancel={() => setIsLoginModalOpen(false)}
          onOk={() => setIsLoginModalOpen(false)}
          footer={<></>}
          className='sm:!w-[60svw]'
        >
          <div className='relative grid grid-cols-10'>
            <div className='col-span-6 sm:h-[70svh] sm:px-12 sm:py-16 flex flex-col items-center justify-center sm:gap-y-6'>
              <input type="text" className='sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100' placeholder='Username'/>
              <input type="password" className='sm:text-[16px] sm:w-2/3 sm:p-2 border border-solid border-black/50 rounded-lg focus:border-[#005555] hover:border-[#005555] transition delay-100' placeholder='Password'/>
              <div className='flex sm:w-2/3 sm:gap-x-2'>
                <div className='sm:w-[45%] sm:h-[1px] bg-black self-center' />
                <div>Or</div>
                <div className='sm:w-[45%] sm:h-[1px] bg-black self-center' />
              </div>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#005555] transition delay-100'>
                <div className='sm:col-span-1'><FacebookSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with Facebook</div>
              </button>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100'>
                <div className='sm:col-span-1'><GoogleSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with Google</div>
              </button>
              <button className='sm:w-2/3 sm:p-2 border border-solid border-black rounded-xl grid sm:grid-cols-8 hover:border-[#335555] transition delay-100'>
                <div className='sm:col-span-1'><LinkedInSVG /></div>                
                <div className='sm:col-span-6 text-[16px] self-center'>Continue with LinkedIn</div>
              </button>
              <button className='sm:w-2/3 sm:h-[48px] bg-[#005555] text-white sm:text-xl font-semibold rounded-xl hover:-translate-y-1 transition duration-100'>Login</button>
              <div className='flex sm:gap-x-1'>
                <div className='sm:text-lg'>Don't have an account?</div>
                <div className='sm:text-lg text-blue-500 font-semibold hover:cursor-pointer hover:underline'>Register</div>
              </div>
            </div>
            <div className='bg-[#012433] col-span-4 sm:h-[70svh] rounded-e-lg flex flex-col justify-center sm:gap-y-4 sm:px-8'>
              <div className='text-white sm:text-3xl font-semibold'>Welcome back</div>
              <div className='divider sm:h-[4px] sm:w-[50%] rounded-full bg-[#005555]' />
              <div className='text-white sm:text-lg font-semibold'>Login to keep track of your searches</div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default NavBar
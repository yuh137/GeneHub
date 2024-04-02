import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='sm:w-[85svw] sm:h-20 bg-[#005555] rounded-md flex justify-between items-center absolute left-1/2 -translate-x-1/2 top-4 sm:px-4'>
        <div className='text-[#ccc] font-semibold hover:text-white hover:cursor-pointer transition duration-100 sm:text-2xl justify-self-start self-center'>GeneHub</div>
        <Breadcrumb 
          className='justify-self-end self-center *:sm:space-x-8'
          separator=''
          items={[
            {
              title: <Link to='/'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Home</div></Link>
            },
            {
              title: <Link to='/contact'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Contact Us</div></Link>
            },
            {
              title: <Link to='/Register'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Register</div></Link>
            },
            {
              title: <Link to='/login'><div className='text-[#ccc] hover:text-white sm:text-[16px] hover:cursor-pointer transition delay-75'>Login</div></Link>
            },
          ]}
        />
      </div>
    </>
  )
}

export default NavBar
import React from 'react'
import NavBar from '../components/NavBar'
import { Dropdown, Button, MenuProps, message } from 'antd'

const Home = () => {
  const targetType: MenuProps['items'] = [
    {
      key: "0",
      label: <option value='All'>All</option>,
    },
    {
      key: "1",
      label: <option>Student</option>,
    },
    {
      key: "2",
      label: <option>Doctor</option>,
    },
    {
      key: "3",
      label: <option>Pharmacist</option>,
    },
    {
      key: "4",
      label: <option>Research</option>,
    },
  ];

  const handleClickDropdown: MenuProps['onClick'] = (something) => {
    // console.log(something);
  }

  const handleSelectDropdown: MenuProps['onSelect'] = (something) => {
    console.log(targetType[parseInt(something.key)]);
  }

  return (
    <>
      <div className="first-container relative sm:w-svw sm:h-svh bg-cover" style={{ backgroundImage: "url('/images/gene_bg_0.jpg')" }}>
        <div className='overlay absolute w-full h-full top-0 left-0 bg-black/[0.3]'/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:space-y-4'>
          <div className='text-white sm:text-4xl font-semibold'>GeneHub</div>
          <div className=''>
            <Dropdown menu={{ items: targetType, onClick: handleClickDropdown, selectable: true, onSelect: handleSelectDropdown }} placement='bottomLeft' trigger={[ 'click' ]}>
              <Button className='bg-[#]'>WTF</Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <NavBar />
    </>
  )
}

export default Home
import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import { Dropdown, Button, MenuProps, Carousel } from 'antd'
import { carousel_data, feedback_carousel_data } from '../utils/MOCK_DATA'
import { CarouselRef } from 'antd/es/carousel'
import { Icon } from '@iconify/react'
import Footer from '../components/Footer'
import { useWindowDimensions } from '../utils/hooks/useWindowDimensions'

const Home = () => {
  const [selectedType, setSelectedType] = useState<string>("All");

  const { width } = useWindowDimensions();
  console.log(process.env.REACT_APP_TEST);

  const researchCarouselRef = useRef<CarouselRef>(null);
  const feedbackCarouselRef = useRef<CarouselRef>(null);

  const targetType: MenuProps["items"] = [
    {
      key: "All",
      label: <div>All</div>,
    },
    {
      key: "Student",
      label: <div>Student</div>,
    },
    {
      key: "Doctor",
      label: <div>Doctor</div>,
    },
    {
      key: "Pharmacist",
      label: <div>Pharmacist</div>,
    },
    {
      key: "Research",
      label: <div>Research</div>,
    },
    {
      key: "Patients",
      label: <div>Patients</div>,
    },
  ];

  const handleClickDropdown: MenuProps['onClick'] = (something) => {
    // console.log(carouselRef);
  }

  const handleSelectDropdown: MenuProps['onSelect'] = (something) => {
    setSelectedType(something.key);
  }

  return (
    <>
      <div className="first-container relative sm:w-svw sm:h-svh bg-cover" style={{ backgroundImage: "url('/images/gene_bg_0.jpg')" }}>
        <div className='overlay absolute w-full h-full top-0 left-0 bg-black/[0.3]'/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:space-y-4'>
          <div className='text-black sm:text-4xl font-semibold text-center mb-1'>GeneHub</div>
          <div className='serach-filter sm:space-x-4'>
            <Dropdown menu={{ items: targetType, onClick: handleClickDropdown, selectable: true, onSelect: handleSelectDropdown }} placement='bottomLeft' trigger={[ 'click' ]}>
              <Button className='sm:w-28 sm:min-w-16 sm:h-14 rounded-full text-center hover:!border-[#005555] hover:!text-white hover:!bg-[#005555]'>{selectedType}</Button>
            </Dropdown>
            <input type="text" className='searchbar my-2 py-2 px-3 sm:w-[28svw] text-[16px] sm:h-14 rounded-full shadow-lg transition duration-75 hover:border hover:border-solid hover:border-[#005555]' placeholder='Search Symptomps'/>
            <button className='sm:w-24 sm:h-14 rounded-full text-center text-sm text-white bg-[#005555] transition delay-150 hover:-translate-y-1'>Search</button>
          </div>
        </div>
      </div>
      <NavBar />
      <div className="carousel-container flex flex-col py-8 px-12 sm:space-y-4">
        <div className='flex justify-between px-28'>
          <div className="carousel-title self-center sm:text-2xl font-bold">Popular Research</div>
          <button className='px-2 py-4 rounded-full text-center self-center text-white bg-[#005555] transition delay-150 hover:-translate-y-1'>View all symptom</button>
        </div>
        <Carousel autoplay infinite slidesToShow={width > 640 ? 3 : 1} pauseOnHover={false} className='sm:w-[80svw] mx-auto' ref={researchCarouselRef}>
          {carousel_data.map((item, index) => (
            <div className="carousel-card px-2" key={index}>
              {/* <div className='sm:w-full h-[384px] bg-cover' style={{ backgroundImage: `url(${item.imgSrc})` }} /> */}
              <div className="card-content shadow-lg px-3 py-4 sm:space-y-6">
                <div className='text-[#005555] sm:text-2xl underline underline-offset-[10px] font-bold'>{item.price}</div>
                <div className='sm:text-[20px] font-bold'>{item.city.join(", ")}</div>
                <div className='sm:space-y-1'>
                  {item.symptoms.map((sym, index) => (
                    <div key={index} className='text-[#aaa]'>{index + 1}. {sym}</div>
                  ))}
                </div>
                <button className='sm:w-24 sm:h-10 rounded-full text-center text-sm text-white bg-[#005555] transition delay-150 hover:-translate-y-1'>See details</button>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="carousel-buttons flex justify-between px-28">
          <button className='sm:w-16 sm:h-10 rounded-full text-center text-sm text-black bg-[#ccc] transition delay-75 hover:bg-[#005555] hover:text-white' onClick={() => {researchCarouselRef.current?.prev()}}>Prev</button>
          <button className='sm:w-16 sm:h-10 rounded-full text-center text-sm text-black bg-[#ccc] transition delay-75 hover:bg-[#005555] hover:text-white' onClick={() => {researchCarouselRef.current?.next()}}>Next</button>
        </div>
      </div>
      {/* <div className="learn-more-container bg-[#F2F3F6] sm:space-x-6 py-8 px-24 flex justify-center">
        <div className="learn-more-card sm:p-[30px] box-content sm:w-[240px] flex flex-col items-center bg-white space-y-4 text-[#0C2A52]">
          <div className='flex flex-col items-center sm:space-y-2'>
            <Icon icon="material-symbols:genetics-rounded" className='sm:text-[48px]'/>
            <div className='text-center font-semibold'>Genetic basics</div>
          </div>
          <div className='text-center text-[#aaa]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, excepturi voluptatum nihil</div>
          <div className='text-lg font-semibold transition-all ease-in delay-100 hover:underline hover:cursor-pointer underline-offset-[6px] decoration-2'>Learn more</div>
        </div>
        <div className="learn-more-card sm:p-[30px] box-content sm:w-[240px] flex flex-col items-center bg-white space-y-4 text-[#0C2A52]">
          <div className='flex flex-col items-center sm:space-y-2'>
            <Icon icon="solar:buildings-2-bold-duotone" className='sm:text-[48px]'/>
            <div className='text-center font-semibold'>Research</div>
          </div>
          <div className='text-center text-[#aaa]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, excepturi voluptatum nihil</div>
          <div className='text-lg font-semibold transition-all ease-in delay-100 hover:underline hover:cursor-pointer underline-offset-[6px] decoration-2'>Learn more</div>
        </div>
        <div className="learn-more-card sm:p-[30px] box-content sm:w-[240px] flex flex-col items-center bg-white space-y-4 text-[#0C2A52]">
          <div className='flex flex-col items-center sm:space-y-2'>
            <Icon icon="mdi:doctor" className='sm:text-[48px]'/>
            <div className='text-center font-semibold'>Doctors</div>
          </div>
          <div className='text-center text-[#aaa]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, excepturi voluptatum nihil</div>
          <div className='text-lg font-semibold transition-all ease-in delay-100 hover:underline hover:cursor-pointer underline-offset-[6px] decoration-2'>Learn more</div>
        </div>
        <div className="learn-more-card sm:p-[30px] box-content sm:w-[240px] flex flex-col items-center bg-white space-y-4 text-[#0C2A52]">
          <div className='flex flex-col items-center sm:space-y-2'>
            <Icon icon="iconoir:pharmacy-cross-circle" className='sm:text-[48px]'/>
            <div className='text-center font-semibold'>Pharmacists</div>
          </div>
          <div className='text-center text-[#aaa]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, excepturi voluptatum nihil</div>
          <div className='text-lg font-semibold transition-all ease-in delay-100 hover:underline hover:cursor-pointer underline-offset-[6px] decoration-2'>Learn more</div>
        </div>
      </div> */}
      {/* <div className="customer-feedback-container flex flex-col pt-8 pb-20 px-12 sm:space-y-4">
        <div className='flex justify-between'>
          <div>Customer Feedback</div>
          <div className="feedback-control-buttons sm:space-x-2">
            <button className='sm:w-16 sm:h-10 rounded-full text-center text-sm text-black bg-[#ccc] transition delay-75 hover:bg-[#005555] hover:text-white' onClick={() => {feedbackCarouselRef.current?.prev()}}>Prev</button>
            <button className='sm:w-16 sm:h-10 rounded-full text-center text-sm text-black bg-[#ccc] transition delay-75 hover:bg-[#005555] hover:text-white' onClick={() => {feedbackCarouselRef.current?.next()}}>Next</button>
          </div>
        </div>
        <Carousel autoplay infinite slidesToShow={3} pauseOnHover={false} ref={feedbackCarouselRef}>
          {feedback_carousel_data.map((item, index) => (
            <div className="feedback-card sm:space-y-5 px-3" key={index}>
              <div className="feedback-avatar bg-cover sm:w-24 sm:h-24 rounded-full" style={{ backgroundImage: `url(${item.imageSrc})` }} />
              <div>
                <div className='feedback-ratings flex'>
                  <Icon icon='mdi:star' className='text-yellow-400 sm:w-4 sm:h-4'/>
                  <Icon icon='mdi:star' className='text-yellow-400 sm:w-4 sm:h-4'/>
                  <Icon icon='mdi:star' className='text-yellow-400 sm:w-4 sm:h-4'/>
                  <Icon icon='mdi:star' className='text-yellow-400 sm:w-4 sm:h-4'/>
                  <Icon icon='mdi:star' className='text-yellow-400 sm:w-4 sm:h-4'/>
                </div>
                <div className="feedback-name sm:text-xl text-[#0C2A52] font-semibold">{item.name}</div>
              </div>
              <div className="feedback-quote">{item.quote}</div>
              <div className="feedback-role text-[#aaa]">{item.role}</div>
            </div>
          ))}
        </Carousel>
      </div> */}
      <div className="researcher-container py-8 px-12 bg-[#F2F3F6] sm:space-y-24 flex flex-col items-center">
          <div className='flex flex-col items-center sm:space-y-4'>
            <div className='sm:text-2xl font-semibold'>Our Team</div>
            <div className='sm:max-w-[60%] sm:min-w-1/2 text-center text-[#aaa]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae repellendus debitis nulla officia, dolor a adipisci praesentium odio! Aspernatur consequuntur reiciendis explicabo in quidem tempore, laudantium fugit quia est.</div>
          </div>
          <div className="researcher-cards flex sm:space-x-4 justify-center">
            {feedback_carousel_data.slice(0, 3).map((item, index) => (
              <div className="researcher-card bg-white px-6 py-10 sm:w-[30%] flex flex-col items-center relative sm:space-y-6">
                <div className='bg-cover sm:w-20 sm:h-20 rounded-full absolute sm:-top-[40px]' style={{ backgroundImage: `url(${item.imageSrc})`}} key={index}/>
                <div>
                  <div className="researcher-name text-xl font-semibold text-center text-[#294267]">{item.name}</div>
                  <div className="researcher-role text-center sm:text-sm text-[#aaa]">{item.role}</div>
                </div>
                <div className='text-center text-[#aaa]'>{item.quote}</div>
                <div className='researcher-links flex sm:space-x-3'>
                  <div className='sm:w-10 sm:h-10 bg-[#294267] rounded-full border-2 border-solid border-[#294267] text-white flex justify-center items-center transition delay-100 hover:cursor-pointer hover:-translate-y-1 hover:bg-white hover:text-[#294267]'>
                    <Icon icon="mdi:twitter" />
                  </div>
                  <div className='sm:w-10 sm:h-10 bg-[#294267] rounded-full border-2 border-solid border-[#294267] text-white flex justify-center items-center transition delay-100 hover:cursor-pointer hover:-translate-y-1 hover:bg-white hover:text-[#294267]'>
                    <Icon icon="ri:facebook-fill" />
                  </div>
                  <div className='sm:w-10 sm:h-10 bg-[#294267] rounded-full border-2 border-solid border-[#294267] text-white flex justify-center items-center transition delay-100 hover:cursor-pointer hover:-translate-y-1 hover:bg-white hover:text-[#294267]'>
                    <Icon icon="mdi:linkedin" />
                  </div>
                  <div className='sm:w-10 sm:h-10 bg-[#294267] rounded-full border-2 border-solid border-[#294267] text-white flex justify-center items-center transition delay-100 hover:cursor-pointer hover:-translate-y-1 hover:bg-white hover:text-[#294267]'>
                    <Icon icon="ri:instagram-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default Home
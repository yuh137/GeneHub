import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { SearchData, search_items } from '../utils/MOCK_DATA'
import { Icon } from '@iconify/react'
import { createSearchParams, useLoaderData, useNavigate } from 'react-router-dom'

const SearchResults = () => {
  const data = useLoaderData() as SearchData[];
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();
  // console.log(data)
  return (
    <>
        <div className="first-container relative">
          <div className='sm:h-[50vh] sm:w-svw bg-cover' style={{ backgroundImage: `url("/images/gene_bg_0.jpg")` }} />
          <div className='overlay absolute w-full h-full top-0 left-0 bg-black/[0.5]'/>
          {/* <div className='font-semibold sm:text-5xl text-white absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2'>Contact Us</div> */}
          <div className='search-filter sm:space-x-4 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2'>
            <input type="text" className='searchbar my-2 py-2 px-3 sm:w-[28svw] text-[16px] sm:h-14 rounded-full shadow-lg transition duration-75 hover:border hover:border-solid hover:border-[#005555]' onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }} placeholder='Search Symptomps'/>
            <button className='sm:w-24 sm:h-14 rounded-full text-center text-sm text-white bg-[#005555] transition delay-150 hover:-translate-y-1' onClick={() => {
              if (!inputValue || inputValue ==="") navigate({
                pathname: "/search",
                search: createSearchParams({
                  searchTerm: ""
                }).toString()
              })
              else navigate({
                pathname: "/search",
                search: createSearchParams({
                  searchTerm: `${inputValue}`
                }).toString()
              })
            }}>Search</button>
          </div>
        </div>
        <NavBar />
        <div className="search-result-section relative sm:w-svw sm:px-20 sm:py-10">
          <div className="search-result-container flex flex-col gap-y-4 sm:min-h-[30svh] sm:max-h-svh sm:px-12 sm:py-6">
            <div className='font-bold sm:text-3xl'>Closest match</div>
            <div className="result-items flex flex-col relative overflow-scroll items-center sm:gap-y-4 no-scrollbar">
              {(!data || data.length === 0) && <div>No matching items</div>}
              {data.map((item, index) => (
                <div className='result-card sm:w-[80%] sm:min-h-fit border border-solid border-black rounded-md sm:px-8 sm:py-4 hover:text-white hover:bg-[#005555] hover:cursor-pointer transition delay-75' key={index} onClick={() => {
                  navigate(`/disease/${item.id}`)
                }}>
                  <div className='result-title font-semibold sm:text-xl'>{item.disease_name}</div>
                  <div className="result-detail grid grid-cols-9">
                    <div className='col-span-5'>
                      <div><span className='font-semibold'>Gene:</span> {item.gene}</div>
                      <div><span className='font-semibold'>Inheritance:</span> {item.inheritance}</div>
                      <div><span className='font-semibold'>Biology Name:</span> {item.bio_name}</div>
                    </div>
                    <div className='col-span-2'>
                      {/* <div className='font-semibold sm:text-md'>Symptomps:</div> */}
                      <div className='flex flex-col'>
                        {item.symptomps.slice(0, 3).map((symptomp, index) => (
                          <div key={index} className='flex sm:space-x-1'>
                            <div className='flex items-center'>
                              <Icon icon="ic:sharp-play-arrow" />
                            </div>
                            <div className='first-letter:capitalize truncate'>{symptomp}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='col-span-2'>
                      {/* <div className='font-semibold sm:text-md'>Symptomps:</div> */}
                      <div className='flex flex-col'>
                        {item.symptomps.slice(3, 6).map((symptomp, index) => (
                          <div key={index} className='flex sm:space-x-1'>
                            <div className='flex items-center'>
                              <Icon icon="ic:sharp-play-arrow" />
                            </div>
                            <div className='first-letter:uppercase'>{symptomp}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default SearchResults
import React from 'react'
import img1 from '../../src/assets/image (1).png'
import img2 from '../../src/assets/image (2).png'
import img3 from '../../src/assets/image (3).png'
import img4 from '../../src/assets/image (4).png'

const Cards = () => {
  return (
    <div className=' absolute top-[230px] flex w-full h-[370px] bg-[#ece6e6] gap-1'>
        <div className='pt-9 px-12 right w-[23%]'>
            <div className='text-xl font-semibold pb-4'>
                Aircraft Supplies
            </div>
            <ul>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white'>Accesories</li>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white ' >Cleaning & Polishing</li>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white '>Cover</li>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white '>Engine</li>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white '>Pilot Probe</li>
                <li className='py-3 px-2 text-sm hover:bg-blue-500 rounded-md hover:text-white '>Tools & Materials</li>
            </ul>
        </div>
        <div className='pt-9  left w-[77%] '>
            <div className='flex flex-wrap gap-4 '>
                <div className='bg-white flex flex-col items-center h-[300px] w-[232px] pt-2 gap-1 rounded-md'>
                    <img src={img1} className='h-44 '/>
                    <h2 className='text-blue-500'>Airbus A319 – G-EZII</h2>
                    <p>৳ 1,400</p>
                    <button className='bg-blue-500 py-2 px-11 text-sm text-white rounded-sm'>Add to Cart</button>
                </div>

                <div className='bg-white flex flex-col items-center h-[300px] w-[232px] pt-2 gap-1 rounded-md'>
                    <img src={img1} className='h-44 '/>
                    <h2 className='text-blue-500'>Airbus A319 – G-EZII</h2>
                    <p>৳ 1,400</p>
                    <button className='bg-blue-500 py-2 px-11 text-sm text-white rounded-sm'>Add to Cart</button>
                </div>

                <div className='bg-white flex flex-col items-center h-[300px] w-[232px] pt-2 gap-1 rounded-md'>
                    <img src={img1} className='h-44 '/>
                    <h2 className='text-blue-500'>Airbus A319 – G-EZII</h2>
                    <p>৳ 1,400</p>
                    <button className='bg-blue-500 py-2 px-11 text-sm text-white rounded-sm'>Add to Cart</button>
                </div>

                <div className='bg-white flex flex-col items-center h-[300px] w-[232px] pt-2 gap-1 rounded-md'>
                    <img src={img1} className='h-44 '/>
                    <h2 className='text-blue-500'>Airbus A319 – G-EZII</h2>
                    <p>৳ 1,400</p>
                    <button className='bg-blue-500 py-2 px-11 text-sm text-white rounded-sm'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
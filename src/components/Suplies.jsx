import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Suplies = () => {
  return (
    <div className='absolute top-[65px] left-[155px]'>
        <h1 className='font-semibold text-[36px] text-white pb-4'>Aircraft Supplies</h1>

        <button  className='flex justify-between items-center gap-1 bg-blue-500 px-2 py-1 rounded-sm text-sm text-white'>
            <div>View All</div>
            <div className='text-xl'><MdKeyboardArrowRight/></div>
        </button>
    </div>
  )
}

export default Suplies
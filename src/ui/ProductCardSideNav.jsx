import React from 'react'
import { FaRegEye, FaRegStar } from 'react-icons/fa'
import { LuArrowLeftRight } from 'react-icons/lu'

const ProductCardSideNav = () => {
  return (
    <div className='absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300'>
        <span className="w-11 h-11 inline-flex items-center justify-center text-skyText rounded-full hover:text-whiteText hover:bg-skyText duration-200">
            <FaRegStar />
        </span>
        <span className="w-11 h-11 inline-flex items-center justify-center text-skyText rounded-full hover:text-whiteText hover:bg-skyText duration-200">
            <LuArrowLeftRight />
        </span>
        <span className="w-11 h-11 inline-flex items-center justify-center text-skyText rounded-full hover:text-whiteText hover:bg-skyText duration-200">
            <FaRegEye />
        </span>
    </div>
  )
}

export default ProductCardSideNav
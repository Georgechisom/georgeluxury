import React from 'react'
import { twMerge } from 'tailwind-merge';

const AddToCartBtn = ({className, title} = {className: string, title: string }) => {
    const newClassName = twMerge("bg-cartBtn text-xs uppercase py-3 text-center rounded-full font-semibold hover:bg-skyText hover:text-whiteText hover:scale-105 duration-200 cursor-pointer text-skyText", className)
  return (
    <button className={newClassName}>{title ? title : "Add to Cart"}</button>
  )
}

export default AddToCartBtn
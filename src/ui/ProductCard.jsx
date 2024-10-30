import React from 'react'
import { ProductProps } from '../../type'
import { MdOutlineStarOutline } from 'react-icons/md'
import AddToCartBtn from './AddToCartBtn'


const ProductCard = ({item} = {item: ProductProps}) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const open = () => {
        setIsOpen(true)
    };

    const close = () => {
        setIsOpen(false)
    }

    const percentage = ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice)*100
  return (
    <div className='border border-skyReduceText rounded-lg p-3 overflow-hidden hover:border-skyText duration-200 cursor-pointer'>
        <div className="w-full h-60 relative group p-2">
            <span onClick={isOpen} className='bg-skyText text-white absolute left-0 right-0  w-16 text-xs text-center rounded-md py-1 font-semibold inline-block z-10'>save {percentage.toFixed(0)}%</span>
            <img src={item?.images[0]} alt="productImage" className='w-full h-full rounded-md object-cover group-hover:scale-110 duration-300' />
        </div>
        <div className="flex flex-col gap-2 pb-2 px-2">
            <h3 className="text-xs font-semibold uppercase text-skyReduceText">{item?.overView}</h3>
            <h2 className="text-lg font-bold line-clamp-2 text-skyText">{item?.name}</h2>
            <div className='text-base text-skyReduceText flex items-center'>
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
                <MdOutlineStarOutline />
            </div>
            <AddToCartBtn />
        </div>
    </div>
  )
}

export default ProductCard
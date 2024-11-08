import React from 'react'
import { ProductProps } from '../../type'
import { MdOutlineStarOutline } from 'react-icons/md'
import AddToCartBtn from './AddToCartBtn'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import FormattedPrice from './FormattedPrice'
import ProductCardSideNav from './ProductCardSideNav'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item} = {item: ProductProps}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigation = useNavigate()

    const open = () => {
        setIsOpen(true)
    };

    const close = () => {
        setIsOpen(false)
    }

    const percentage = ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice)*100;
    const handleProduct = () => {
        navigation(`/product/${item._id}`)
    }
  return (
    <div className='border border-skyReduceText rounded-lg p-3 overflow-hidden hover:border-skyText duration-200 cursor-pointer'>
        <div className="w-full h-60 relative group p-2">
            <span onClick={open} className='bg-skyText text-white absolute left-0 right-0  w-16 text-xs text-center rounded-md py-1 font-semibold inline-block z-10'>save {percentage.toFixed(0)}%</span>
            <img onClick={handleProduct} src={item?.images[0]} alt="productImage" className='w-full h-full rounded-md object-cover group-hover:scale-110 duration-300' />
            <ProductCardSideNav />
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
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}> 
                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full max-w-md rounded-xl bg-skyReduceText z-50 p-4 backdrop-blur-2xl">
                                <DialogTitle as='h3' className="text-base/7 text-white font-medium">
                                    Hurry Up !
                                </DialogTitle>
                                <p className="mt-2 text-sm/6 text-white/85">
                                    You are going to save{" "}
                                    <span className="text-skyText">
                                    <FormattedPrice
                                        amount={item?.regularPrice - item?.discountedPrice}
                                    />{" "}
                                    </span>
                                    from this product.
                                </p>
                                <p className="text-sm/6 text-white/85">
                                    Our products are top quality, affordable, and comes with years of warranty to ensure that our customers enjoy our items
                                </p>
                                <div className="mt-4">
                                    <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-skyText/60 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-lg shadow-white focus:outline-none data-[hover]:bg-skyText data-[open]:bg-skyText data-[focus]:outline-1 data-[focus]:outline-white"
                                    onClick={close}
                                    >
                                    Got it, thanks!
                                    </Button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </div>
  )
}

export default ProductCard
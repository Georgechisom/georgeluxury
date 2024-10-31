import React from 'react'
import Container from './Container'
import Title from './Title'
import { Link } from 'react-router-dom';
import { brandFive, brandFour, brandOne, brandSix, brandThree, brandTwo, DiscountedAirpod, DiscountIphone, ProductTwo } from '../assets';

const DiscountedBanner = () => {
    const popularSearchItems = [
        { title: "Smart Watches", link: "smartWatches" },
        { title: "Mobile phones", link: "Mobilephones" },
        { title: "Cameras", link: "camerasAndPhotos" },
        { title: "Televisions", link: "tvAndAudio" },
        { title: "Laptop & Computers", link: "computersAndLaptop" },
        { title: "Air Conditions", link: "Aircondition" },
    ];
  return <Container>
    <div className="hi text-lg">
        <Title text="Popular Search" />
        <div className='w-full h-[1px] bg-skyText mt-3'/>
    </div>
    <div className='my-7 flex items-center flex-wrap gap-4'>
        {popularSearchItems.map(({title, link}) => (
            <Link 
                key={title} 
                to={`/category/${link}`}
                className='border-[1px] border-skyText px-4 py-3 capitalize rounded-full font-semibold text-skyText duration-200 hover:bg-skyText hover:text-whiteText hover:border-none hover:shadow-lg hover:shadow-skyReduceText text-sm md:text-lg md:px-8'
            >
                {title}
            </Link>
        ))}
    </div>
    <div className="w-full py-10 md:py-8 my-12 bg-cartBtn rounded-lg flex md:flex-row items-center justify-between overflow-hidden">
        <img src={DiscountedAirpod} alt="discountedImage" className='w-[100px] md:w-auto lg:inline-flex h-36 object-contain' />
        <div className="flex flex-col flex-1 gap-2 items-center text-center">
            <div className="flex items-center justify-center gap-x-3 font-bold px-4">
                <h2 className="hi capitalize text-skyText text-base md:text-4xl">Air pod 5</h2>
                <Link to={"/product"} className='border-[1px] border-red-600 px-2 md:px-4 py-2 text-sm md:text-3xl text-red-600 rounded-full'>Discount 20%</Link>
            </div>
            <p className='text-sm text-skyText font-medium'>You're are a few steps away to get the our discounted price</p>
        </div>
        <img src={DiscountIphone} alt="discountedImage" className='hidden lg:inline-flex h-36' />
    </div>
    <div className="mt-7">
        <p className='font-bold text-2xl md:text-4xl text-skyText'>Top Product Brands</p>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7 gap-1 md:gap-0'>
            <div className='border md:border-r-0  border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandOne} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
            <div className='border  md:border-r-0 border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandTwo} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
            <div className='border  md:border-r-0 border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandThree} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
            <div className='border  md:border-r-0 border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandFour} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
            <div className='border  md:border-r-0 border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandFive} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
            <div className='border  md:border-r-1 border-skyText flex items-center justify-center px-6 py-2 cursor-pointer group'>
                <img src={brandSix} alt="" className='w-36 h-auto group-hover:opacity-50' />
            </div>
        </div>
    </div>
  </Container>
}

export default DiscountedBanner
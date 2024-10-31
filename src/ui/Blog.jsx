import React from 'react'
import Container from './Container'
import Title from './Title'
import { blogsData } from '../constants/Index'
import { BlogProps } from '../../type'

const Blog = () => {
  return (
    <Container>
        <Title text="Our Lastest Blog" className="text-center text-skyText" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
            {
                blogsData.map((item = BlogProps) => (
                    <div key={item._id} className='cursor-pointer group'>
                        <div className='overflow-hidden'>
                            <img src={item.image} alt="blogImage" className='w-full h-auto object-cover group-hover:scale-110 duration-300' />
                        </div>
                        <div className='mt-5'>
                            <p className='text-sm font-medium uppercase text-skyText '>{item._base}</p>
                            <p className='font-bold text-skyText line-clamp-1'>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </Container>
  )
}

export default Blog
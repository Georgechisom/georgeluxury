import React from 'react'
import Container from './Container'
import Title from './Title'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const Productlist = () => {
  return (
    <Container>
        <div className="mb-10">
            <div className="flex items-center justify-between">
                <Title text='Best Selling Products' />
                <Link to='/product' className='md:inline-flex duration-200 relative overflow-hidden group mt-3 text-skyText font-semibold'>
                    View All Products
                    <span className='absolute bottom-0 left-0 w-full block h-[1px] bg-skyText -translate-x-[100%] group-hover:translate-x-0 duration-300'/>
                </Link>
            </div>
            <div className='w-full h-[1px] bg-skyText mt-3'/>
        </div>
        {/* pagination */}
        <Pagination />
    </Container>
  )
}

export default Productlist
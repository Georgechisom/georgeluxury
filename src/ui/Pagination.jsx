"use client";
import { useState } from "react";
import { ProductProps } from "../../type";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";
import { products } from "../constants/Index";


const Items = ({ currentItems } = {currentItems: ProductProps }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {currentItems &&
        currentItems?.map((item = ProductProps) => (
          <ProductCard key={item?._id} item={item} />
        ))}
    </div>
  );
};

const Pagination = () => {
  const itemsPerPage = 16;
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event = any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newStart = newOffset + 1;
    
    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border[1px] border-lightColor hover:border-skyText duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold py-10"
          activeClassName="bg-skyText text-white"
        />
        <p className="text-skyText">
          Products from <b>{itemStart}</b> to <b>{Math.min(endOffset, products?.length)}{" "}</b>
          of <b>{products?.length}</b>
        </p>
      </div>
    </>
  );
};

export default Pagination;
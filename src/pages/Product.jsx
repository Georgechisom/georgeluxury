import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../constants/Index'
import { config } from '../../config'
import { ProductProps } from '../../type'

const Product = () => {
  const [productData, setProductData] = useState(null) ;
  const [allProducts, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const endpoint = id 
  ? `${config?.baseUrl}/${products}/${id}` 
  : `${config?.baseUrl}/${products}/` ;

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true)
        const data = await JSON.stringify(endpoint);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [id, endpoint])
  
  return <div>Product</div>
}

export default Product
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { FeatureCard } from '../../components/FeatureCard/features'
import  { Header }  from '../../components/Header/mainHeader'





const Products = () => {
    const [products, setProducts] = useState([])
useEffect(() => {
 const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/api/ai-tools')
    const data = await response.json()
    console.log(data)
    setProducts(data)
 }
 fetchProducts()

}, [])
  return (
    
    <div>
        <Header/>
        <div class="flex flex-col text-center w-full mt-20">
      <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
      </div>
        {
            products.length > 0 ?
            <ProductCard products={products}/>
            :
            <div>Wait a minute..</div>
        }
        
    </div>
  )
}

export default Products
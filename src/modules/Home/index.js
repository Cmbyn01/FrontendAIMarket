import React, { useEffect, useState } from 'react'
import  { Header } from '../../components/Header/mainHeader'
import { Hero } from '../../components/Hero/hero'
import ProductCard from '../../components/ProductCard/ProductCard'
import { FeatureCard } from '../../components/FeatureCard/features'
import { Footer } from '../../components/Footer/footer'
import ContactUs from '../ContactUs'

export const Home = () => {
const [products, setProducts] = useState([])
useEffect(() => {
 const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=12')
    const data = await response.json()
    console.log(data)
    setProducts(data)
 }
 fetchProducts()

}, [])




  return (
    <>
    <Header/>
    <Hero/>
    <div class="flex flex-col text-center w-full mt-20">
      <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
    </div>
    {
        products.length > 0 ?
        <ProductCard products={products} />
        :
        <div>Upcoming...</div>
    }
    <ProductCard/>
    <ContactUs/>
    <Footer/>
    
    </>
  )
}

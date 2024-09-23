import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";


const ProductsData= [
  {
    id: 1,
    title: "Boat Headphone",
    img: Img1,
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    title: "Rocky Mountain",
    img: Img2,
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    title: "Goggles",
    img: Img3,
    price: "320",
    aosDelay: "480",
  },
  {
    id: 4,
    title: "Printed",
    img: Img4,
    price: "250",
    aosDelay: "600",
  }
  
]
const ProductsData2= [
  {
    id: 1,
    title: "Boat Headphone",
    img: Img5,
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    title: "Rocky Mountain",
    img: Img6,
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    title: "Goggles",
    img: Img7,
    price: "320",
    aosDelay: "480",
  },
  {
    id: 4,
    title: "Printed",
    img: Img3,
    price: "250",
    aosDelay: "600",
  }
  
]

const Products = () => {
  return (
    <div className='container'>
        {/* Header Section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"}/>
        {/* Body Section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
    </div>
  )
}

export default Products

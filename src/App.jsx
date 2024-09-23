import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

import headphone from './assets/hero/headphone.png';
import Smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';

// Banner data
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jull to 28 Jull",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Summer Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi magnam sunt debitis voluptatem! Quasi, magni aperiam deleniti dolorem debitis accusamus, omnis magnam nobis voluptas minima, ad nulla officia. Quo!",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: Smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi magnam sunt debitis voluptatem! Quasi, magni aperiam deleniti dolorem debitis accusamus, omnis magnam nobis voluptas minima, ad nulla officia. Quo!",
  bgColor: "#2dcc6F",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false); // Set the initial state to `false`

  const handleOrderPopup = () => {
    setOrderPopup((prev) => !prev); // Toggle the popup visibility
  };

  return (
    <div className='bg_white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      {/* Pass `handleOrderPopup` to components that need to trigger the popup */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      
      <Category />
      <Category2 />
      <Services />
      
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      
      {/* Popup component to handle order */}
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;

import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks = [
    {
        title:"Home",
        link:"#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    }
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* company details */}
            <div className='py-8 px-4'>
                <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'><span className='text-gray-500 hover:text-black
                                    dark:hover:text-white duration-200'>smk</span>Shop</a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Sunt, nemo? Quae 
                    sapiente at sint.
                </p>
                <p className='text-gray-500 mt-4'>
                    Made with ❤️ By Smaiki Youssef
                </p>
            </div>
            {/* Footer Links */}
            <div className='col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                   <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                   <ul className='space-y-3'>
                        {
                            FooterLinks.map(
                                (data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                        className='text-gray-600 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                )
                            )
                        }
                   </ul>
                </div>
                {/* Second col Links */}
                <div className='py-8 px-4'>
                   <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                   <ul className='space-y-3'>
                        {
                            FooterLinks.map(
                                (data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                        className='text-gray-600 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300'>
                                            {data.title}
                                        </a>
                                    </li>
                                )
                            )
                        }
                   </ul>
                </div>
                {/* Company Address */}
                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Morocco</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt />
                            <p>+212 665754140</p>
                        </div>
                        {/* Social Links */}
                        <div className='flex items-center gap-3 mt-6'>
                            <a href=''>
                                <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                            </a> 
                            <a href=''>
                                <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                            </a> 
                            <a href=''>
                                <FaGithub className='text-3xl hover:text-primary duration-300'/>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

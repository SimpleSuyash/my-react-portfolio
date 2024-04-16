// import React from 'react'
import { socialIcons } from '../data'

const Footer = () => {
  return (
    <footer className='bg-blackperl py-8 fixed left-0 bottom-0 min-w-full'>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between mx-8">

            {/* social icons      */}
            <div className="flex space-x-5 items-center justify-center">
                {
                    socialIcons.map(({icon, url}, index) => {
                        // const {icon, url}  = item;
                        return (
                            <a key={index} href = {url} target="_blank" className=' text-2xl hover:opacity-85'>    
                                {icon}  
                            </a>
                        )
                    })
                }
            </div>

            {/* copyright  */}
            <div className="lg:text-right text-paragraph italic mr-4 text-sm">
                &copy; 2024 Suyash Maharjan. All rights reserved.
            </div>
           

        </div>    
    </footer>
  )
}

export default Footer


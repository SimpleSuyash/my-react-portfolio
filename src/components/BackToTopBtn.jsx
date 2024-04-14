import React, {useState, useEffect} from 'react';


//import icon
import {ChevronUpIcon} from '@heroicons/react/24/outline';
//import link
import { animateScroll as scroll} from 'react-scroll';


const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        //scroll to top
        const toggleVisibility = () => {
            if(window.scrollY > 600){
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll', toggleVisibility);
        // return () => window.removeEventListener('scroll', toggleVisibility);
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    console.log(isVisible);
    return(
        isVisible && (
            <button onClick={scrollToTop} className='bg-accent size-12 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex
             justify-center items-center transition-all shadow-md  shadow-white ' > 
                <ChevronUpIcon className='size-6 ' />
            </button> 
        )
    );

}

export default BackToTopBtn
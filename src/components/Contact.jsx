import React from 'react'
import {contact} from '../data'

const Contact = () => {
  return (
    <section className='section bg-leather' id='contact'>

        {/* section title  */}
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className=" section-title before:content-contact relative before:absolute before:opacity-25 before:-top-7 before:-left-40 before:hidden before:lg:block">Contact Me</h2>
                <p className="subtitle">
                    If you have any questions or need clarification regarding the source code of any of the repositories, please don't hesitate to ask. I'm here to assist! 👩‍💻
                </p>
            </div>

            <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                
                {/* contact info */}
                <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    {contact.map((item, index) => { 
                        const {icon, title, subtitle, description} = item;
                        return (
                            <div key={index} className="flex flex-col lg:flex-row gap-x-4">
                                <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-accent font-normal'>{description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* contact form */}
                    <form action="" className='space-y-8 w-full max-w-[780px]'>
                        <div className="flex gap-8">
                            <input type="text" className='input' placeholder='Your name' name="name"/>
                            <input type="email" className='input' placeholder='Your email' name="email"/>
                        </div>
                        <input type="text" className='input' placeholder='Subject' name="subject"/>
                        <textarea className='textarea' placeholder='Your message' name="message"></textarea>
                        <button type="button" className='btn btn-lg bg-accent hover:bg-accent-hover'>Send Message</button>
                    </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
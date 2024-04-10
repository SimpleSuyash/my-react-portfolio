import ProfilePhoto from '../assets/images/pp_suit.jpg';
const Hero = () => {
  return (
    <section className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden lg:pb-2'>
        <div className="container mx-auto h-full">
            <div className="flex items-center h-full pt-8">
                {/* left side */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <p className="text-accent mb-6" >Hi, I'm Suyash 👋</p>
                    <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight xl:text-7xl lg:leading-[1.2]  font-bold md:tracking-[-2px]">I'm a Full Stack<br/> Junior Developer</h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg  text-center lg:text-left '>
                        I have a passion for creating beautiful and functional websites. I have knowledge of both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am currently seeking new opportunities to work on exciting projects and collaborate with other developers.
                    </p>
                    <button className='btn btn-sm bg-accent hover:bg-accent-hover md:btn-md transition-all'>Contact Me</button>
                </div>
                {/* right side */}
                <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                    <img src={ProfilePhoto} alt="my profile photo"  className='rounded-3xl' />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero;